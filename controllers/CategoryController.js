const { Category } = require("../models");

class CategoryController {
  static async getAll(req, res) {
    try {
      let categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const { name } = req.body;
      let result = await Category.create({
        name,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;
      let result = await Category.update(
        {
          name,
        },
        {
          where: {
            id,
          },
        },
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await Category.destroy({
        where: {
          id,
        },
      });
      result === 1
        ? res.status(200).json({
            message: "Category deleted successfully",
          })
        : res.status(404).json({
            message: "Error deleting category",
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getById(req, res) {
    try {
      const id = +req.params.id;
      let result = await Category.findByPk(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = CategoryController;
