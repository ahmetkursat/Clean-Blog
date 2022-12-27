const Clean = require('../models/clean');

exports.createpost = async(req,res) => {
    await Clean.create(req.body)
 res.redirect('/');
}

exports.updatepost = async (req,res) => {
    const clean = await Clean.findOneAndUpdate(req.params.id);
    clean.subtitle = req.body.subtitle;
    clean.content = req.body.content;
    clean.save();
    res.redirect(`/post/${req.params.id}`);
  }

exports.deletepost = async (req,res) => {
    await Clean.findOneAndRemove(req.params.id)
    res.redirect('/')
}