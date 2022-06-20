//This is also using the server.js when it is reading from there

const router = require('express').Router();
const { User, Product } = require('../models');


//This is initiating the first handlebar.  This works in applying the search, logo, cart, etc.  This is for the header
router.get('/', async (req, res) => {
    res.render('home');
});

//I'm also going to be making another guide.  This one is for the handlebars that's in the folder

/*

    registertemplate:  This is the form that has the layout for registering.  This one works.
    signintemplate:  Layout when signing in.  It works
    mainpageproduct:  Has the images for the layout of the page.  THIS DOESN'T WORK ON DIRECT.  This DOES work, however, on serverwinsdar.js because that particular server has two ports.  When we load this into the shopping template, it will then use the layout for the mainpageproduct
    mainlayoutattempt:  With this one, it contains the logo, search, cart, the product inside with the {{{body}}}, copyright, and cards used.  THIS DOESN'T WORK DIRECT

*/

//To render the Main Home Page:
//Let's attempt to get all the data from the space

// GET all product for homepage
router.get('/main', async (req, res) => {
    try {
      const dbProductData = await Product.findAll({
      });
  
      const products = dbProductData.map((product) =>
        product.get({ plain: true })
      );
  
      res.render('handlebars-settings/mainhomepageoverall.hbs', {
        products,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//To render the Checkout Page:
router.get('/checkout', (req, res) => {
    res.render('handlebars-settings/checkoutpageoverall.hbs', {
        //This is just a test to see if it can get the data.  It can retrieve the data.  The only problem now is we need to get the ACTUAL data from the DB
        posts: [
            {
                name: 'One Piece',
                item: 'Sword',
                price: '$15.99',
                description: 'A sword that the character uses in the anime!'            
            },
            {
                name: 'Demon Slayer',
                item: 'Axe',
                price: '$25.99',
                description: 'A axe that the character uses in the anime!'            
            },
            {
                name: 'Demon Slayer',
                item: 'Axe',
                price: '$25.99',
                description: 'A axe that the character uses in the anime!'            
            }
        ]

    });
});

//To render the Checkout Page:
router.get('/signin', (req, res) => {
    res.render('handlebars-settings/signinoverall.hbs');
});



//Testing out the verification!

router.get('/verifytest', function (req, res) {
    res.render('loginverificationattempt');
});

//First, we load in the template that it used to verify
router.get('/registertest', (req, res) => {
    res.render('handlebars-settings/registeroverall');
});







//To render the Checkout Page:
router.get('/register', (req, res) => {
    res.render('handlebars-settings/registeroverall.hbs');
});

//This is the start on the verification.  Notice that we have .post now.
router.post('/register', (req, res) => {
    //This is the information that is going to be used in the system
    const { email, firstName, lastName, password, confirmPassword } = req.body;

    // Check if the password and confirm password fields match
    if (password === confirmPassword) {

        // Check if user with the same email is also registered
        if (users.find(user => user.email === email)) {

            res.render('handlebars-settings/registeroverall.hbs', {
                message: 'User already registered.',
                messageClass: 'alert-danger'
            });

            return;
        }

        const hashedPassword = getHashedPassword(password);

        // Store user into the database if you are using one
        users.push({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        res.render('login', {
            message: 'Registration Complete. Please login to continue.',
            messageClass: 'alert-success'
        });
    } else {
        res.render('handlebars-settings/registeroverall.hbs', {
            message: 'Password does not match.',
            messageClass: 'alert-danger'
        });
    }
});






//To render the Checkout Page:
router.get('/checkoutform', (req, res) => {
    res.render('handlebars-settings/checkoutformoverall.hbs');
});


//Testing to see if the sign up confirmation works
router.get('/logintest', (req, res) => {
    res.render('login', { message: req.flash('error') });
});

router.get('/signuptest', (req, res) => {
    res.render('signup', { message: req.flash('error') });
});


module.exports = router;