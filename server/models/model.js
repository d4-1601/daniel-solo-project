//imports needed
const { mongoose } = require('./indexDB.js');

//schema definition
const co2Schema = new mongoose.Schema({
  // user credentials
  // accountName: String,
  // accountEmail: String,
  // accountPassword: String,
  // form
  people: String,
  country: String,
  electricity: String,
  naturalGas: String,
  // googlemaps mock - not yet in use because the info from mock
  // car: Number,
  // publicTransport: Number,
  // flying: Number

  //Other reference
  // name: {
  //   type: String,
  //   required: true
  // }
}, {timestamps: true});

//model creation
const EmissionsModel = mongoose.model('ecoproject', co2Schema);

module.exports = EmissionsModel;

