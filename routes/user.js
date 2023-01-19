const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");

userRoute.get("/", UserController.getAll);
userRoute.post('/signin', UserController.signin)
userRoute.post('/signup', UserController.signup)
userRoute.put("/:id", UserController.update);
userRoute.delete("/:id", UserController.delete);
userRoute.get('/data/:id', UserController.getById)

module.exports = userRoute;
