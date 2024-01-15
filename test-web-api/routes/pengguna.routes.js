module.exports = (app) => {
  const penggunas = require("../controllers/pengguna.controller");
  const router = require("express").Router();
  router.get("/", penggunas.findAll);
  router.post("/", penggunas.create);
  router.delete("/:id", penggunas.delete);
  app.use("/api/pengguna", router);
};
