const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');


/*This is the setup for one of the handlebars */
const app = express();
app.set('view engine', 'hbs');

//We're using the handlebars in the Layouts path and it is in shoppingtemplate
app.engine('hbs', exphbs.engine({
    defaultLayout: 'shoppingtemplate',
    extname: '.hbs'
}));

//View the engine here
app.set('view engine', 'hbs');

//On the dirname, find the public folder to add the styles and the images
app.use(express.static(path.join(__dirname, 'public')));

//Render dummy cause the home is just the example that uses nothing
app.get('/', (req, res) => {
    res.render('home');
});

//The actual direct path that has the mainpageproduct handlebars
app.get('/main', (req, res) => {
    res.render('mainpageproduct');
});

app.get('/checkout', (req, res) => {
    res.render('checkoutpage');
});


const apptwo = express();
apptwo.set('view engine', 'hbs');

apptwo.engine('hbs', exphbs.engine({
    defaultLayout: 'maintwo',
    extname: '.hbs'
}));

apptwo.set('view engine', 'hbs');

apptwo.use(express.static(path.join(__dirname, 'public')));

apptwo.get('/signin', (req, res) => {
    res.render('signintemplate');
});


apptwo.get('/register', (req, res) => {
    res.render('registertemplate');
});

apptwo.get('/checkout', (req, res) => {
    res.render('checkouttemplate');
});



app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});


apptwo.listen(3001, () => {
    console.log('The web server has started on port 3001');
});


/* End of the first handlebar */



