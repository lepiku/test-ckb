const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Mahasiswa = sequelize.define("mahasiswa", {
    nim: { type: Sequelize.STRING(64), allowNull: false, primaryKey: true },
    nama_mahasiswa: { type: Sequelize.STRING(64), allowNull: false },
    jurusan: { type: Sequelize.STRING(64), allowNull: false },
  });

  return Mahasiswa;
};
