//imports needed
const EmissionsModel = require('../models/model.js');
const OffsetModel = require('../models/offsetting.js');

//add new user data to the db
const postEmissions = async (req, res) => {
  //the new object
  const newData = {
    people: req.body.people,
    country: req.body.country,
    electricity: req.body.electricity,
    naturalGas: req.body.naturalGas,
    foodForecast: req.body.foodForecast,
    electricityForecast: req.body.electricityForecast,
    gasForecast: req.body.gasForecast
  };

  try {
    const showData = await EmissionsModel.create(newData);
    res.status(201).send(showData);
  } catch (err) {
    console.log(err);
    res.status(404).send();
  }
};

const getUserInfo = async (req, res) => {
  try {
    // const userId = req.params.id;
    const userInfo = await EmissionsModel.find({});
    res.status(200).send(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

const postOffsetProject = async (req, res) => {
  //the new object
  const newData = {
    url: req.body.url,
    country: req.body.country,
    nameFlag: req.body.nameFlag,
    startingPrice: req.body.startingPrice,
    treeSpecies: req.body.treeSpecies,
    imgUrl: req.body.imgUrl
  };

  try {
    const showData = await OffsetModel.create(newData);
    res.status(201).send(showData);
  } catch (err) {
    console.log(err);
    res.status(404).send();
  }
};

const getOffsetProject = async (req, res) => {
  try {
    // const userId = req.params.id;
    const projectInfo = await OffsetModel.find({});
    res.status(200).send(projectInfo);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

//exporting as obj
module.exports = { postEmissions, getUserInfo, postOffsetProject, getOffsetProject };