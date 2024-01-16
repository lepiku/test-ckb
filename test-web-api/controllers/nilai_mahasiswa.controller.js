const db = require("../models");
const NilaiMahasiswa = db.nilai_mahasiswa;
const Mahasiswa = db.mahasiswa;
const MataKuliah = db.mata_kuliah;

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  } else if (!(await Mahasiswa.findOne({ where: { nim: req.body.nim } }))) {
    res.status(400).send({
      message: "Mahasiswa dengan NIM tsb tidak ada",
    });
    return;
  } else if (
    !(await MataKuliah.findOne({
      where: { kode_mata_kuliah: req.body.kode_mata_kuliah },
    }))
  ) {
    res.status(400).send({
      message: "Matkul dengan kode tsb tidak ada",
    });
    return;
  } else if (
    await NilaiMahasiswa.findOne({
      where: {
        kode_mata_kuliah: req.body.kode_mata_kuliah,
        nim: req.body.nim,
      },
    })
  ) {
    res.status(400).send({
      message: "Nilai ini sudah ada",
    });
    return;
  }

  const nilai_mahasiswa = {
    nim: req.body.nim,
    kode_mata_kuliah: req.body.kode_mata_kuliah,
    tugas: req.body.tugas,
    uas: req.body.uas,
  };

  // Save NilaiMahasiswa in the database
  NilaiMahasiswa.create(nilai_mahasiswa)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the NilaiMahasiswa.",
      });
    });
};

exports.findAll = (req, res) => {
  NilaiMahasiswa.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving NilaiMahasiswas.",
      });
    });
};

// exports.update = (req, res) => {};

exports.delete = (req, res) => {
  const kode_mata_kuliah = req.params.kode_mata_kuliah;
  const nim = req.params.nim;

  NilaiMahasiswa.destroy({
    where: { nim: nim, kode_mata_kuliah: kode_mata_kuliah },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "NilaiMahasiswa was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete NilaiMahasiswa. Maybe NilaiMahasiswa was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete NilaiMahasiswa",
      });
    });
};
