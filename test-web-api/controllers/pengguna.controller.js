const db = require("../models");
const Pengguna = db.pengguna;
const Op = require("sequelize").Op;



exports.create = (req, res) => {
  console.log(req.body)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const pengguna = {
    nama: req.body.nama,
    alamat: req.body.alamat,
    nomor_telepon: req.body.nomor_telepon,
    jenis_kelamin: req.body.jenis_kelamin,
  };

  // Save Pengguna in the database
  Pengguna.create(pengguna)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  // Pengguna.findAll({ where: condition })
  Pengguna.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
