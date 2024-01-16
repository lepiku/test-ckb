module.exports = (app) => {
  const controller = require("../controllers/nilai_mahasiswa.controller");
  const router = require("express").Router();
  router.get("/", controller.findAll);
  router.post("/", controller.create);
  router.delete("/:nim/:kode_mata_kuliah", controller.delete);
  app.use("/api/nilai-mahasiswa", router);
};
