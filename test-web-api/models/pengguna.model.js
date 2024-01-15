const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Pengguna = sequelize.define("pengguna", {
    nama: { type: Sequelize.STRING, unique: true, allowNull: false },
    alamat: { type: Sequelize.TEXT, allowNull: false },
    nomor_telepon: { type: Sequelize.STRING, allowNull: false },
    jenis_kelamin: { type: Sequelize.STRING, allowNull: false },
  });

  return Pengguna;
};
