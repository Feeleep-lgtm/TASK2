const express = require("express");
const fs = require("fs");
const app = express();

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server started at port 8000");
});
