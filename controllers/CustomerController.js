const { Customer } = require("../models");

class CustomerController {
  static async getAll(req, res) {
    try {
      let customers = await Customer.findAll();
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const { name, email, address, image, phone } = req.body;
      let result = await Customer.create({
        name,
        email,
        address,
        image,
        phone,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { name, address, image, phone } = req.body;
      let result = await Customer.update(
        {
          name,
          address,
          image,
          phone,
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
      let result = await Customer.destroy({
        where: {
          id,
        },
      });
      result === 1
        ? res.status(200).json({
            message: "Customer deleted successfully",
          })
        : res.status(404).json({
            message: "Error deleting Customer",
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getById(req, res) {
    try {
      const id = +req.params.id;
      let result = await Customer.findByPk(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = CustomerController;
