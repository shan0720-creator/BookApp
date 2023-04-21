// AevjgHgMxCud1EkZ

const express = require('express');
const mongoose = require('mongoose')
const router = require("./routes/bookroutes.js")
const app = express();
const cors = require('cors');

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router) // localhost:5000/books


app.use('/',(req,res,next)=>{
    res.send('This is our starting App')
})

mongoose.connect("mongodb+srv://santleasemj3:AevjgHgMxCud1EkZ@cluster0.q3rjfvm.mongodb.net/myDB?retryWrites=true&w=majority")
.then(()=>console.log("Connected To Database")).then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));
 

