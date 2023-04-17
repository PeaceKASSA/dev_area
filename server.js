const express  = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');
const https = require('https');
const querystring = require('querystring');
const qs = require('querystring');
const axios = require('axios');
const { google } = require('googleapis');
var cors = require("cors");
const Snoowrap = require('snoowrap');
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");



var cors = require('cors');
const gC = require('./Services/gmailConfig.js');
const dC = require('./Services/driveConfig.js');

mongoose.connect('mongodb+srv://Peace:area2023@area0.qpqz0m5.mongodb.net/areaApI');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/auth/drive", (req, res) => {
  const authUrlD = dC.getAuthUrlD();
  res.redirect(authUrlD);

});

app.get("/auth/gmail", (req, res) => {
    const authUrl = gC.getAuthUrl();
    res.json({
        authUrl
    });
});

app.get("/drive/oauthcallback", async (req, res) => {
  const code = req.query.code;
  const tokens = await dC.getAccessTokenD(code);
  dC.oAuth2ClientD.setCredentials(tokens);
  const userDataD = await dC.getUserDataD();
  res.send(userDataD);
});

app.get("/gmail/oauthcallback", async (req, res) => {
    const code = req.query.code;
    const tokens = await gC.getAccessToken(code);
    gC.oAuth2Client.setCredentials(tokens);
    res.redirect('http://localhost:8081/reddit_google');
});

app.post("/register", async (req, res) => {

     const {name} = req.body;
     const {email} = req.body;
     let password = bcrypt.hashSync(req.body.password, 10 );

    if (!name || !email || !password) {
     return res.status(401).json({ error: "Please fill your details" });
      }
      try {
          const userExist = await User.findOne({ email: email }, {name: password });

        if (userExist)
        {       
            return res
            .status(400)
           .json({ error: "Email or name already exists" });
         }

          const user = new User({ name, email, password});
          
          const userRegister = user.save();

          if (userRegister)
          {
               res.status(200).json({ message: "User registered successfully" });
              }
        
      } catch (err) {
          console.log(err);
      }
    })
    
  app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).json({
            title: "server error",
            error: err
        })
        if (!user) {
            return res.status(401).json({
                title: "user not found",
                error: 'invalid credentials'
        })
    }

    if(!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'login failed',
                error: 'invalid credentials' 
            })
        }
        let token = jwt.sign({userId: user._id}, 'secretkey');
            return res.status(200).json({
                title: 'login success',
                token: token
            })
    })
  })


app.get('/register', async(req, res) => {
    try {
        const register = await User.find()
        res.status(200).json(register)

    } catch(error) {
        res.send(`Some error occured => ${error}`)
    }

})



const CLIENT_ID = "IobzKvIgjnnWKIHFG8AkSw";
const CLIENT_SECRET = "J3U_AAp8nsMx6MqOTNSx-3S18f_Tpg";
const REDIRECT_URI = "http://localhost:8080/auth/reddit/callback";
const STATE = "area";
const SCOPE = "history";
const authUrl = 'https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=${STATE}&redirect_uri=${REDIRECT_URI}&duration=temporary&scope=${SCOPE}';

app.get('/auth/reddit/callback', async (req, res) => {
  const { code, state: returnedState } = req.query;

  // TODO: Verify that the state parameter matches the state parameter that you sent in the authorization URL

  if (returnedState !== STATE) {
    return res.status(400).send('State parameter mismatch');
  }

  // Exchange the code parameter for an access token
  const postData = querystring.stringify({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: REDIRECT_URI,
  });

  const options = {
    hostname: 'www.reddit.com',
    port: 443,
    path: '/api/v1/access_token',
    method: 'POST',
    headers: {
      'User-Agent': 'MyApp/1.0.0',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      'Content-Length': Buffer.byteLength(postData),
    },
  };

  const request = https.request(options, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      //console.log(data);
      console.log('Response from Reddit API:', data);
      const { access_token, refresh_token } = JSON.parse(data);

      // TODO: Store the access token and refresh token in your database for the user
      console.log('Access token:', access_token);
      console.log('Refresh token:', refresh_token);
      // Redirect the user to your app's homepage or some other page
      res.redirect('http://localhost:8081/reddit');
    });
  });

  request.on('error', (error) => {
    console.error(error);
    res.status(500).send('An error occurred');
  });

  request.write(postData);
  request.end();
});


const port = process.env.port || 8080;

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('server is unning on port ' + port);
})
