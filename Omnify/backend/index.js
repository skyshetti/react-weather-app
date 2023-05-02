const express = require("express");
const cors = require("cors");
const app = express();

const router = require("./config/routes");

const PORT = 3333;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
