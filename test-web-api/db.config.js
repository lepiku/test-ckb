module.exports = {
    HOST: "localhost",
    PORT: "1434",
    USER: "dimas",
    PASSWORD: "asdf1234",
    DB: "testWebApps",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };