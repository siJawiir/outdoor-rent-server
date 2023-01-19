const { User } = require("../models");
const { encryptPass, decryptPass } = require("../helpers/bcrypt");
const { tokenGenerator, tokenVerifier } = require("../helpers/jwt");

class UserController {
  static async getAll(req, res) {
    try {
      let users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async signup(req, res) {
    try {
      const { username, email, password, image, phone } = req.body;
      let result = await User.create({
        username,
        email,
        password,
        image,
        phone,
      });
      // console.log(hashPass)
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async signin(req, res) {
    try {
      const { email, password } = req.body;
      let emailFound = await User.findOne({
        where: {
          email,
        },
      });

      if (emailFound) {
        if (decryptPass(password, emailFound.password)) {
          let accessToken = tokenGenerator(emailFound);
          // console.log(accessToken);
          res.status(200).json({ accessToken });
          // let verifyToken = tokenVerifier(accessToken);
          // console.log(verifyToken);
        } else {
          res.status(403).json({ message: `Invalid password` });
        }
      } else {
        res.status(404).json({ message: `Email not found` });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { username, email, password, image, phone } = req.body;
      let result = await User.update(
        {
          username,
          email,
          password: encryptPass(password),
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
      let result = await User.destroy({
        where: {
          id,
        },
      });
      result === 1
        ? res.status(200).json({
            message: "User deleted successfully",
          })
        : res.status(404).json({
            message: "Error deleting user",
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getById(req, res) {
    try {
      const id = +req.params.id;
      let result = await User.findByPk(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
