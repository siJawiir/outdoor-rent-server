const itemRoute = require("express").Router();
const ItemController = require("../controllers/ItemController");
const authentication = require("../middlewares/auth");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

itemRoute.get("/", ItemController.getAll);
itemRoute.post("/", authentication, ItemController.create);
itemRoute.put("/:id", ItemController.update);
itemRoute.delete("/:id", ItemController.delete);
itemRoute.get("/data/:id", ItemController.getById);

module.exports = itemRoute;
