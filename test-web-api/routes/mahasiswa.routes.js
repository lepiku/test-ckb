module.exports = (app) => {
  const controller = require("../controllers/mahasiswa.controller");
  const router = require("express").Router();
  router.get("/", controller.findAll);
  router.post("/", controller.create);
  router.delete("/:nim", controller.delete);
  app.use("/api/mahasiswa", router);
};
