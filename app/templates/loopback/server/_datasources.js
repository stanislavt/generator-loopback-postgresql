'use strict';

module.exports = {
  db: {
    name: 'postgres',
    connector: 'postgresql',
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DBNAME,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD
  },
  email: {
    name: 'email',
    connector: 'mail',
    transports: [
      {
        type: 'SMTP',
        host: process.env.SMTP_HOST,
        secure: false,
        port: 587,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD
        }
      }
    ]
  },
  storage: {
    name: 'storage',
    connector: 'loopback-component-storage',
    provider: 'amazon',
    key: process.env.BUCKET_KEY,
    keyId: process.env.BUCKET_KEY_ID,
    bucket: process.env.BUCKET,
    allowedContentTypes: ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'],
    maxFileSize: 30 * 1024 * 1024
  }
};
