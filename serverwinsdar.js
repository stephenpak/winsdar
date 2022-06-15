const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');


/*This is the setup for one of the handlebars */
const app = express();
app.set('view engine', 'hbs');

app.engine('hbs', exphbs.engine({
    defaultLayout: 'shoppingtemplate',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home');
});

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



