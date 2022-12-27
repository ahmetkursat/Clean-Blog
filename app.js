const express = require("express");

const mongoose = require('mongoose');

const methodOverride = require('method-override')

const ejs = require("ejs");

const Clean = require("./models/clean.js");

const path = require("path");
const { resolve } = require("path");

const pageController = require("./controller/pagecontroller")

const cleanController = require("./controller/cleancontroller")

const app = express();

mongoose.connect('mongodb://localhost/clean-blog-db',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method',{
  methods: ['POST','GET']
}))

app.get('/', pageController.getclean);
app.get('/about',pageController.getaboutpage)
app.get('/add_post',pageController.getaddpage);
app.get('/post/:id', pageController.getpostpage);
app.get('/edit/:id',pageController.geteditpage);
app.post('/clean',cleanController.createpost);
app.put('/edit/:id',cleanController.updatepost);
app.delete('/post/:id',cleanController.deletepost);

const port = 8000;

app.listen(port, () => {
  console.log(`${port}  numaralı porta bağlandın`);
});


