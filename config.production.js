module.exports = {
  url: "https://www.sheffieldviking.org.uk",
  server: {
    port: 2368,
    host: "::"
  },
  mail: {
    transport: "SMTP",
    options: {
      service: "Mailgun",
      host: "smtp.eu.mailgun.org",
      port: 465,
      secure: true,
      auth: {
        user: "postmaster@sheffieldviking.org.uk",
        pass: process.env.MAILGUN_SMTP_PASSWORD
      }
    }
  },
  database: {
    client: "sqlite3",
    connection: {
      filename: "/var/lib/ghost/content/data/ghost.db"
    }
  },
  logging: {
    transports: [
      "file",
      "stdout"
    ]
  },
  process: "local",
  paths: {
    contentPath: "/var/lib/ghost/content"
  }
};
