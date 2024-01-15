const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const NilaiMahasiswa = sequelize.define("nilai_mahasiswa", {
    nim: { type: Sequelize.STRING(64), allowNull: false, primaryKey: true },
    kode_mata_kuliah: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    tugas: { type: Sequelize.INTEGER, allowNull: false },
    uas: { type: Sequelize.INTEGER, allowNull: false },
  });

  return NilaiMahasiswa;
};
