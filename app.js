const path = require("path");

const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || "3000";
app.set("views", "views");
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
