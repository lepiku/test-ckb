const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Pengguna = sequelize.define("pengguna", {
    nama: { type: Sequelize.STRING(64), unique: true, allowNull: false },
    alamat: { type: Sequelize.TEXT, allowNull: false },
    nomor_telepon: { type: Sequelize.STRING(16), allowNull: false },
    jenis_kelamin: { type: Sequelize.STRING(16), allowNull: false },
  });

  return Pengguna;
};
