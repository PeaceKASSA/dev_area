const { google } = require("googleapis");
const { OAuth2Client } = require("google-auth-library");

const CLIENT_ID = '797459302927-9mf23v1thrd9fm0lo2slb0hcda6bp2ke.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:8080/drive/oauthcallback';

const oAuth2ClientD = new OAuth2Client(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

function getAuthUrlD() {
    const scopes = ["https://www.googleapis.com/auth/drive"];
    return oAuth2ClientD.generateAuthUrl({
      access_type: "offline",
      scope: scopes,
    });
}

async function getAccessTokenD(code) {
    const { tokens } = await oAuth2ClientD.getToken(code);
    return tokens;
}

async function getUserDataD() {
    const drive = google.drive({ version: "v3", auth: oAuth2ClientD });
    const { data } = await drive.files.list();
    return data;
}

module.exports.getAuthUrlD = getAuthUrlD;
module.exports.getAccessTokenD = getAccessTokenD;
module.exports.getUserDataD = getUserDataD;
module.exports.oAuth2ClientD = oAuth2ClientD;