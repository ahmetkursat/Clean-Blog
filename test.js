const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CleanSchema = new Schema({
    title:String,
    content:String,
})

const Clean = mongoose.model('Clean',CleanSchema);