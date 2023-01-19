const transactionRoute = require("express").Router();
const TransactionController = require("../controllers/TransactionController");

transactionRoute.get("/", TransactionController.getAll);
transactionRoute.post("/", TransactionController.create);
transactionRoute.put("/:id", TransactionController.update);
transactionRoute.delete("/:id", TransactionController.delete);
transactionRoute.get('/:id', TransactionController.getById)

module.exports = transactionRoute;
