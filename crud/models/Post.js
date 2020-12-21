const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    title : String , 
    description : String , 
    date : String 
})
module.exports = mongoose.model('Posts' , PostSchema);