//This is being read from the server.js with the routes file name:

/*
const router = require('express').Router();


const exphbs = require('express-handlebars');

//We MUST use home-routes.js with this function
const homeRoutes = require('./home-routes.js');








//Start by identifying the handlebars that we're using
//This is the layout for the Main Page WITHOUT the products
router.engine('hbs', exphbs.engine({
    defaultLayout: 'mainlayoutattempt',
    extname: '.hbs'
}));



//When we retrieve the information of the homeRoutes, put it here
router.use('/', homeRoutes);

module.exports = router;

*/






//This is being read from the server.js with the routes file name:


const router = require('express').Router();

//We MUST use home-routes.js with this function
const homeRoutes = require('./home-routes.js');


//When we retrieve the information of the homeRoutes, put it here
router.use('/', homeRoutes);

module.exports = router;

