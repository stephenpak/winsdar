const router = require('express').Router();

//We MUST use home-routes.js with this function
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');


//When we retrieve the information of the homeRoutes, put it here
router.use('/', homeRoutes);
//This is going to use the routes for the /api
router.use('/api', apiRoutes);

module.exports = router;

