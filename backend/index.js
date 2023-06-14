const express = require("express");
require('dotenv').config();
const Connection = require("./config/db.js");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
Connection();
app.listen(process.env.PORT, () =>
    console.log(`Server is running successfully on PORT ${process.env.PORT}`)
); 