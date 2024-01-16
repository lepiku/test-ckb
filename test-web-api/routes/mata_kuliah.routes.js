module.exports = (app) => {
  const controller = require("../controllers/mata_kuliah.controller");
  const router = require("express").Router();
  router.get("/", controller.findAll);
  router.post("/", controller.create);
  router.delete("/:kode_mata_kuliah", controller.delete);
  app.use("/api/mata-kuliah", router);
};
