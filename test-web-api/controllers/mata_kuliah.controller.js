const MataKuliah = require("../models").mata_kuliah;

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (
    await MataKuliah.findOne({
      where: { kode_mata_kuliah: req.body.kode_mata_kuliah },
    })
  ) {
    res.status(400).send({
      message: "kode_mata_kuliah tidak unik",
    });
    return;
  }

  const mahasiswa = {
    kode_mata_kuliah: req.body.kode_mata_kuliah,
    nama_mata_kuliah: req.body.nama_mata_kuliah,
    sks: req.body.sks,
  };

  // Save MataKuliah in the database
  MataKuliah.create(mahasiswa)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the MataKuliah.",
      });
    });
};

exports.findAll = (req, res) => {
  MataKuliah.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving MataKuliahs.",
      });
    });
};

// exports.update = (req, res) => {};

exports.delete = (req, res) => {
  const kode_mata_kuliah = req.params.kode_mata_kuliah;

  MataKuliah.destroy({ where: { kode_mata_kuliah: kode_mata_kuliah } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "MataKuliah was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete MataKuliah with kode_mata_kuliah=${kode_mata_kuliah}. Maybe MataKuliah was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete MataKuliah with id=" + kode_mata_kuliah,
      });
    });
};
