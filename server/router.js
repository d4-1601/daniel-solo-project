//main requirements
const Express = require('express');
const { postEmissions, getUserInfo } = require('./controllers/controller.js');

const router = Express.Router();

//api routes
// router.get('/:id/tracker', getUserInfo);
router.get('/profile', getUserInfo);
router.post('/profile', postEmissions);

//exporting router
module.exports = router;