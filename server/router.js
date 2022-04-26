//main requirements
const Express = require('express');
const { postEmissions, getUserInfo, postOffsetProject, getOffsetProject } = require('./controllers/controller.js');

const router = Express.Router();

//api routes
// router.get('/:id/tracker', getUserInfo);
router.get('/profile', getUserInfo);
router.post('/profile', postEmissions);

router.get('/offsetting', getOffsetProject);
router.post('/offsetting', postOffsetProject);

//exporting router
module.exports = router;