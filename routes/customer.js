const customerRoute = require("express").Router();
const CustomerController = require("../controllers/CustomerController");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'./images/')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage: storage})

customerRoute.get("/", CustomerController.getAll);
customerRoute.post("/", CustomerController.create);
customerRoute.put("/:id", CustomerController.update);
customerRoute.delete("/:id", CustomerController.delete);
customerRoute.get('/:id', CustomerController.getById)

module.exports = customerRoute;
