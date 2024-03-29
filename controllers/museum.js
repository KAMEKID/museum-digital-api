const db = require("../models");
const Museum = db.museums;
const { Sequelize } = require("sequelize");

exports.create = async (req, res) => {
  try {
    const data = await Museum.create(req.body);
    res.json({
      message: "quiz created successfully.",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const museums = await Museum.findAll();
    res.json({
      message: "Museum retrieved successfully.",
      data: museums,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const museums = await Museum.findByPk(id, { rejectOnEmpty: true });
    res.json({
      message: `Museum retrieved successfully with id=${id}.`,
      data: museums,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving Museum",
      data: null,
    });
  }
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  const num = await Museum.count({ where: { id: id } });
  if (isNaN(id)) {
    res
      .status(400)
      .send({ status: 400, message: "Id harus berupa angka", data: null });
    return;
  } else if (num == 0) {
    res.status(404).send({
      status: 404,
      message: `Data dengan id ${id} tidak ditemukan`,
      data: null,
    });
    return;
  }
  try {
    const seeMuseum = await Museum.findByPk(id, { rejectOnEmpty: true });
    res.status(200).send({
      status: 200,
      message: `Sukses data dengan ${id} berhasil ditemukan`,
      data: seeMuseum,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error.message || "Server Error",
      data: null,
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Museum.findByPk(id, { rejectOnEmpty: true });
    quiz.update(req.body, {
      where: { id },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const museum = await Museum.findByPk(id, { rejectOnEmpty: true });

    museum.destroy();

    res.json({
      message: "Museum deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving Museum",
      data: null,
    });
  }
};
