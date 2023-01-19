const { Gear, Category } = require("../models");

class GearController {
  static async getAll(req, res) {
    try {
      let gears = await Gear.findAll({
        include: [Category],
      });
      res.status(200).json(gears);
      // console.log(gears);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, description, price, CategoryId, image } = req.body;
      // let image = req.file;
      let result = await Gear.create({
        name,
        description,
        price,
        image,
        CategoryId,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { name, description, price, image, CategoryId } = req.body;
      let result = await Gear.update(
        {
          name,
          description,
          price,
          image,
          CategoryId,
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
      let result = await Gear.destroy({
        where: {
          id,
        },
      });
      result === 1
        ? res.status(200).json({
            message: "Gear deleted successfully",
          })
        : res.status(404).json({
            message: "Error deleting Gear",
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getById(req, res) {
    try {
      const id = +req.params.id;
      let result = await Gear.findByPk(id, { include: [Category] });
      res.status(200).json(result);
      console.log(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = GearController;
