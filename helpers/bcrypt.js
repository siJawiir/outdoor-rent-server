const bcrypt = require("bcrypt");
const saltRounds = +process.env.SALT_ROUNDS || 5;

const encryptPass = (data) => {
  return bcrypt.hashSync(String(data), saltRounds);
};

const decryptPass = (data, hashPass) => {
  return bcrypt.compareSync(String(data), hashPass);
};

module.exports = {
  encryptPass,
  decryptPass,
};
