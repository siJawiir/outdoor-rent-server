const { tokenVerifier } = require("../helpers/jwt");

const authentication = (req, res, next) => {
  console.log("Middleware Authentication");
  const access_token = req.headers.access_token;
  if (access_token) {
    console.log(`Access token: ${access_token}`);
    try {
      let verifyToken = tokenVerifier(access_token);
      req.userData = verifyToken;
      next();
    } catch (error) {
      res.status(500).json({
        message: "Invalid token",
      });
    }
  } else {
    res.status(401).json({ message: "Access token not found" });
  }
};

module.exports = authentication