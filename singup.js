const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.set('view engine', 'hbs');

app.engine('hbs', exphbs.engine({
    defaultLayout: 'maintwo',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

/*
TAKE THIS FUNCTION OUT BECAUSE FOR SOME REASON, THIS IS OVERWRITING THE SYSTEM.  EVEN IF WE WERE TO USE THE SECOND STATEMENT, IT'LL GO TO THIS!
*/

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/signin', (req, res) => {
    res.render('signintemplate');
});


app.get('/register', (req, res) => {
    res.render('registertemplate');
});

app.get('/checkout', (req, res) => {
    res.render('checkouttemplate');
});

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});