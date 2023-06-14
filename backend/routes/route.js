const { addUser,getUser,getUserById,editUser,deleteUser } = require('../controllers/user.controller');
const express = require('express');
const Router = express.Router();

Router.post("/add", addUser);
Router.get('/getAll',getUser);
Router.get('/getById/:id',getUserById);
Router.put('/edit/:id',editUser);
Router.delete('/delete/:id',deleteUser);


module.exports = {Router};