const Clean = require('../models/clean');

exports.getclean = async(req,res) => {
    const clean = await Clean.find({})
    res.render('index',{
      clean
    });
  }

exports.getaboutpage = (req,res) => {
    res.render('about')
  }

exports.getaddpage = (req,res) => {
    res.render('add_post')
  }

exports.getpostpage = async (req, res) => {
    const clean = await Clean.findById(req.params.id); //urlde yazılan sayısal değeri işler params
    res.render('post', {
      clean: clean,
    });
  }
exports.geteditpage = async (req,res) => {
    const clean = await Clean.findOne({_id:req.params.id});
    res.render('edit', {clean: clean})
  }