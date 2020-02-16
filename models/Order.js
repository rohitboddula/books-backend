const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    book_id: [{type: mongoose.Schema.ObjectId, ref: "book"}] ,
    user_id: {type: mongoose.Schema.ObjectId, ref: "user"},
    date   : {type: Date} ,
    total  : {type: Number}       
    
});
    
const User = mongoose.model("user", userSchema);