const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const MataKuliah = sequelize.define("mata_kuliah", {
    kode_mata_kuliah: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    nama_mata_kuliah: { type: Sequelize.STRING(64), allowNull: false },
    sks: { type: Sequelize.INTEGER, allowNull: false },
  });

  return MataKuliah;
};
