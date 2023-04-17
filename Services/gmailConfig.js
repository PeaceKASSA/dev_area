const { google } = require("googleapis");
const { OAuth2Client } = require("google-auth-library");

const CLIENT_ID = '797459302927-9mf23v1thrd9fm0lo2slb0hcda6bp2ke.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:8080/gmail/oauthcallback';

const oAuth2Client = new OAuth2Client(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

function getAuthUrl() {
  const scopes = ["https://www.googleapis.com/auth/gmail.readonly"];
  return oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
}

async function getAccessToken(code) {
  const { tokens } = await oAuth2Client.getToken(code);
  return tokens;
}

async function getUserData() {
  /*const drive = google.drive({ version: "v3", auth: oAuth2Client });
  const { data } = await drive.files.list();
  return data;*/
  const gmailClient = google.gmail({version: 'v1', auth: oAuth2Client});
  const res = await gmailClient.users.messages.list({userId: 'me'});
  return (res.data.messages);
}

module.exports.getAuthUrl = getAuthUrl;
module.exports.getAccessToken = getAccessToken;
module.exports.getUserData = getUserData;
module.exports.oAuth2Client = oAuth2Client;