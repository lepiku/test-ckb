module.exports = (app) => {
  require("./pengguna.routes")(app);
  require("./mahasiswa.routes")(app);
  require("./mata_kuliah.routes")(app);
  require("./nilai_mahasiswa.routes")(app);
};
