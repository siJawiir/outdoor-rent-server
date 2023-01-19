const gearRoute = require("express").Router();
const GearController = require("../controllers/GearController");
const path = require("path");

const multer = require("multer");
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "./public/uploads"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage: diskStorage });

gearRoute.get("/", GearController.getAll);
gearRoute.post("/", upload.single("image"), GearController.create);
gearRoute.put("/:id", GearController.update);
gearRoute.delete("/:id", GearController.delete);
gearRoute.get("/:id", GearController.getById);

module.exports = gearRoute;
