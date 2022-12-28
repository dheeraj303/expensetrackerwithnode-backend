const Sequelize=require('sequelize');
const sequelize=new Sequelize('expense','nodeproject','nodeproject',{
    dialect:'mysql',
    host:'localhost'
});
module.exports=sequelize;