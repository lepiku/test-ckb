const dbConfig = require("../db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.sequelize = sequelize;

// No 1
db.pengguna = require("./pengguna.model.js")(sequelize);

// No 2
db.mahasiswa = require("./mahasiswa.model.js")(sequelize);
db.mata_kuliah = require("./mata_kuliah.model.js")(sequelize);
db.nilai_mahasiswa = require("./nilai_mahasiswa.model.js")(sequelize);
db.mahasiswa.hasMany(db.nilai_mahasiswa, { foreignKey: "nim" });
db.mata_kuliah.hasMany(db.nilai_mahasiswa, { foreignKey: "kode_mata_kuliah" });

module.exports = db;
