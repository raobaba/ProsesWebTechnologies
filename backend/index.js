const express = require("express");
require('dotenv').config();
const Connection = require("./config/db.js");
const {Router} = require('./routes/route.js');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use('/',Router)
Connection();
app.listen(process.env.PORT, () =>
    console.log(`Server is running successfully on PORT ${process.env.PORT}`)
); 