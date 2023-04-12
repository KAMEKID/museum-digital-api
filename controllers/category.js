const db = require("../models");
const Category = db.categorys;
const { Sequelize } = require("sequelize");

exports.create = async (req, res) => {
  try {
    const data = await Category.create(req.body);
    res.json({
      message: "Category created successfully.",
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
    const categorys = await Category.findAll();
    res.json({
      message: "Category retrieved successfully.",
      data: categorys,
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
    const categorys = await Category.findByPk(id, { rejectOnEmpty: true });
    res.json({
      message: `Category retrieved successfully with id=${id}.`,
      data: categorys,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving Category",
      data: null,
    });
  }
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  const num = await Category.count({ where: { id: id } });
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
    const seeCategory = await Category.findByPk(id, { rejectOnEmpty: true });
    res.status(200).send({
      status: 200,
      message: `Sukses data dengan ${id} berhasil ditemukan`,
      data: seeCategory,
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
    const quiz = await Category.findByPk(id, { rejectOnEmpty: true });
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
    const category = await Category.findByPk(id, { rejectOnEmpty: true });

    category.destroy();

    res.json({
      message: "Category deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving Category",
      data: null,
    });
  }
};
