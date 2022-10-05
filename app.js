const express = require("express");

const mongoose = require('mongoose');

const ejs = require("ejs");

const Clean = require("./models/clean.js");

const path = require("path");

const app = express();

mongoose.connect('mongodb://localhost/clean-blog-db',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async(req,res) => {
  const clean = await Clean.find({})
  res.render('index',{
    clean
  });
});

app.get('/about',(req,res) => {
  res.render('about')
})

app.get('/add_post',(req,res) => {
  res.render('add_post')
})

app.get('/post/:id', async(req,res) => {
  
  const post = await Clean.findById(req.params.id);
 res.render('post', {
 post
   })
})

app.post('/clean', async(req,res) => {
  await Clean.create(req.body)
 res.redirect('/');
});

const port = 8000;

app.listen(port, () => {
  console.log(`${port}  numaralı porta bağlandın`);
});


