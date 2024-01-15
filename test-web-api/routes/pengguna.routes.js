module.exports = (app) => {
  const penggunas = require("../controllers/pengguna.controller");
  const router = require('express').Router()
  router.get('/', penggunas.findAll)
  router.post('/', penggunas.create)
  app.use('/api/pengguna', router)
};
