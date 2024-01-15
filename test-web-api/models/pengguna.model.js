const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Pengguna = sequelize.define("pengguna", {
    nama: { type: Sequelize.STRING, unique: true },
    alamat: { type: Sequelize.STRING },
    nomor_telepon: { type: Sequelize.STRING },
    jenis_kelamin: { type: Sequelize.STRING },
  });

  return Pengguna;
};
