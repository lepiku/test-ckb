const db = require("../models");
const Pengguna = db.pengguna;

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (await Pengguna.findOne({ where: { nama: req.body.nama } })) {
    res.status(400).send({
      message: "Nama tidak unik",
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
          err.message || "Some error occurred while creating the Pengguna.",
      });
    });
};

exports.findAll = (req, res) => {
  Pengguna.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving penggunas.",
      });
    });
};

// exports.update = (req, res) => {};

exports.delete = (req, res) => {
  const id = req.params.id;

  Pengguna.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Pengguna was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Pengguna with id=${id}. Maybe Pengguna was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Pengguna with id=" + id,
      });
    });
};
