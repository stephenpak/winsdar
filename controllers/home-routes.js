//This is also using the server.js when it is reading from there

const router = require('express').Router();

//This is initiating the first handlebar.  This works in applying the search, logo, cart, etc.  This is for the header
router.get('/main', (req, res) => {
    res.render('mainlayoutattempt');
});



module.exports = router;