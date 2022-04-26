const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/soloProject');
console.log('Successfully connected to mongooseDB');

module.exports = { mongoose };

//db = soloProject
//col = ecoproject
//col = offsetproject