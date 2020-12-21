const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//import routes 
const postRoute = require('./routes/posts')
app.use('/posts', postRoute)














//connect to dataBase
mongoose.connect(process.env.DB_CONNECTION , {
    useNewUrlParser:true ,
    useUnifiedTopology:true  } ,()=> 
    {console.log('connect to db ')})
    app.use(express.json());
app.get('/' , (req,res)=>{
    res.send('hello')
})



app.listen(3000 , ()=> console.log("The server is running on port 3000"));