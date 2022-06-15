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



app.engine('hbs', exphbs.engine({
    defaultLayout: 'maintwo',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');


app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/signin', (req, res) => {
    res.render('signintemplate');
});


app.get('/register', (req, res) => {
    res.render('registertemplate');
});

app.get('/checkoutform', (req, res) => {
    res.render('checkouttemplate');
});



app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});


/* End of the first handlebar */



