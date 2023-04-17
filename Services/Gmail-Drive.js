const nodemailer = require("nodemailer");
const { google } = require('googleapis')

const CLIENT_ID = '797459302927-9mf23v1thrd9fm0lo2slb0hcda6bp2ke.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04BKwyPdwBQDwCgYIARAAGAQSNwF-L9Ir39fsGsGouxKKSCONbBR7BuSxldZGbpMeCz56GHswdftpllOsQJQTWcpuX3plUIK9uPU'

async function authenticate(user) {
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
  
    const { tokens } = await oAuth2Client.getToken(user.authorization_code);
    client.setCredentials(tokens);
  
    return oAuth2Client;
}

async function getMessage(auth, messageId) {
    const gmail = google.gmail({ version: 'v1', auth });
    const message = await gmail.users.messages.get({
      userId: 'me',
      id: messageId
    });
  
    return message;
}

async function hasPdfAttachment(message) {
    const parts = message.data.payload.parts;
    for (const part of parts) {
      if (part.mimeType === 'application/pdf') {
        return true;
      }
    }
    return false;
}

async function downloadPdfAttachment(auth, messageId, attachmentId) {
    const gmail = google.gmail({ version: 'v1', auth });
    const attachment = await gmail.users.messages.attachments.get({
      userId: 'me',
      messageId: messageId,
      id: attachmentId
    });
  
    const pdfData = attachment.data.data;
    // TODO: Upload the PDF data to OneDrive
  
    return pdfData;
}

module.exports.hasPdfAttachment = hasPdfAttachment
module.exports.authenticate = authenticate
module.exports.getMessage = getMessage
module.exports.downloadPdfAttachment = downloadPdfAttachment