const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CleanSchema = new Schema({
    author:String,
    title:String,
    subtitle:String,
    content:String,
    datecreated:{
        type:Date,
        default:Date.now  
    },
});

const Clean = mongoose.model('Clean',CleanSchema);

module.exports = Clean;