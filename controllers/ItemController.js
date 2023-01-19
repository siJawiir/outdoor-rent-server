const { Item, User } = require("../models");
const { tokenVerifier } = require("../helpers/jwt");

class ItemController {
  static async getAll(req, res) {
    try {
      let items = await Item.findAll({
        include: [User],
      });
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async create(req, res) {
    try {
      const { name, type, price, image, stock } = req.body;
      const UserId = +req.userData.id
      let result = await Item.create({
        name,
        type,
        price,
        image,
        stock,
        UserId,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static update(req, res) {}

  static delete(req, res) {}

  static getById(req, res) {}
}

module.exports = ItemController;
