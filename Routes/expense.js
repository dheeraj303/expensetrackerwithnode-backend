const express=require('express');
const Router=express.Router();
const expensecontroller=require('../controllers/expense');


Router.get('/get-expense',expensecontroller.getexpense);
Router.post('/save',expensecontroller.postexpense);
Router.get('/getbyid/:id',expensecontroller.getexpensebyid);
Router.get('/delete/:id',expensecontroller.deleteuser);
Router.post('/update/:id',expensecontroller.updateuser);
module.exports=Router;