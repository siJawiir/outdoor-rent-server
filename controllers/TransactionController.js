const { Transaction, Customer, Gear } = require("../models");

class TransactionController {
  static async getAll(req, res) {
    try {
      let transactions = await Transaction.findAll({
        include: [Customer, Gear],
      });
      res.status(200).json(transactions);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    try {
      const { CustomerId, GearId, dateStart, dateEnd } = req.body;
      let result = await Transaction.create({
        CustomerId: +CustomerId,
        GearId: +GearId,
        dateStart,
        dateEnd,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { CustomerId, GearId, dateStart, dateEnd } = req.body;
      let result = await Transaction.update(
        {
          CustomerId: +CustomerId,
          GearId: +GearId,
          dateStart,
          dateEnd,
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
      let result = await Transaction.destroy({
        where: {
          id,
        },
      });
      result === 1
        ? res.status(200).json({
            message: "Transaction deleted successfully",
          })
        : res.status(404).json({
            message: "Error deleting Transaction",
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getById(req, res) {
    try {
      const id = +req.params.id;
      let result = await Transaction.findByPk(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = TransactionController;
