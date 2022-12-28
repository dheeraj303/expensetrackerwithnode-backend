const express=require('express');
const app=express();
const bodyParser=require('body-parser');
var cors=require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const errorcontroller=require('./controllers/error');
const expenseroute=require('./Routes/expense');
const sequelize = require('./Util/database');
app.use(expenseroute);
app.use(errorcontroller.get404);
sequelize.sync().then((result)=>{
    // console.log(result);
    app.listen(3000)
}).catch(err=>console.log(err));