const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/public/uploads',express.static('/public/uploads'))

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
