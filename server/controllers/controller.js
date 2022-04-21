//imports needed
const EmissionsModel = require('../models/model.js');

//add new user data to the db
const postEmissions = async (req, res) => {
  //the new object
  const newData = {
    accountName: req.body.accountName,
    accountEmail: req.body.accountEmail,
    accountPassword: req.body.accountPassword,
    people: req.body.people,
    country: req.body.country,
    electricity: req.body.electricity,
    naturalGas: req.body.naturalGas
  };

  try {
    const showData = await EmissionsModel.create(newData);
    res.status(201).send(showData);
  } catch (err) {
    console.log(err);
    res.status(404).send();
  }
};

//get data from the db
// const getUserInfo = async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const userInfo = await EmissionsModel.findById(userId);
//     res.status(200).send(userInfo);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send();
//   }
// };
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

//exporting as obj
module.exports = { postEmissions, getUserInfo };