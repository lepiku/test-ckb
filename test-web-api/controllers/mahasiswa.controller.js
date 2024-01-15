const Mahasiswa = require("../models").mahasiswa;

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (await Mahasiswa.findOne({ where: { nim: req.body.nim } })) {
    res.status(400).send({
      message: "NIM tidak unik",
    });
    return;
  }

  const mahasiswa = {
    nim: req.body.nim,
    nama_mahasiswa: req.body.nama_mahasiswa,
    jurusan: req.body.jurusan,
  };

  // Save Mahasiswa in the database
  Mahasiswa.create(mahasiswa)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Mahasiswa.",
      });
    });
};

exports.findAll = (req, res) => {
  Mahasiswa.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Mahasiswas.",
      });
    });
};

// exports.update = (req, res) => {};

exports.delete = (req, res) => {
  const nim = req.params.nim;

  Mahasiswa.destroy({ where: { nim: nim } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Mahasiswa was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Mahasiswa with nim=${nim}. Maybe Mahasiswa was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Mahasiswa with id=" + nim,
      });
    });
};
