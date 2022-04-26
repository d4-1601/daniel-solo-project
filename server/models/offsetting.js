//imports needed
const { mongoose } = require('./indexDB.js');

//schema definition
const offsettingSchema = new mongoose.Schema({
  url: String,
  country: String,
  nameFlag: String,
  startingPrice: String,
  treeSpecies: String
}, {timestamps: true});

//model creation
const OffsetModel = mongoose.model('offsetproject', offsettingSchema);

module.exports = OffsetModel;