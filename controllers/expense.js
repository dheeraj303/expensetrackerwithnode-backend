const Expense=require('../models/expense')

exports.getexpense=(req,res,next)=>{
    Expense.findAll().then((expense)=>{
        res.json(expense);
    })
    .catch(err=>console.log(err));
}

exports.postexpense=(req,res,next)=>{
    const expense=req.body.amount;
    const desc=req.body.desc;
    const type=req.body.type;
    Expense.create({
        amount:expense,
        desc:desc,
        type:type
    }).then(()=>{
        res.json([{"status":"1", "message":"successfull"}])
    }).catch(err=>console.log(err));
}

exports.updateuser=(req,res,next)=>{
    const id=req.params.id;
    const amount=req.body.amount;
    const desc=req.body.desc;
    const type=req.body.type;
    Expense.findByPk(id).then((expense)=>{
      expense.amount=amount;
      expense.desc=desc;
      expense.type=type;
      return expense.save();  
    }).then(()=>{
        res.json([{"status":"1", "message":"successfully updated"}])
    }).catch(err=>console.log(err));
}

exports.getexpensebyid=(req,res,next)=>{
    const id=req.params.id;
    Expense.findByPk(id).then(expense=>{
        res.json(expense);
    }).catch(err=>console.log(err));
}

exports.deleteuser=(req,res,next)=>{
    const id=req.params.id;
    Expense.findByPk(id).then(expense=>{
        return expense.destroy();
    }).then(()=>{
        res.json([{"status":"1", "message":"successfully deleted"}]);
    })
    .catch(err=>console.log(err));
}