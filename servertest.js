const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

//Go to the controllers file
const routes = require('./controllers');

//Using the connection.js in the config folder
//const sequelize = require('./config/connection');

/*This is the setup for one of the handlebars */
const app = express();
app.set('view engine', 'hbs');

//Start by identifying the handlebars that we're using
app.engine('hbs', exphbs.engine({
    defaultLayout: 'mainattempt',
    extname: '.hbs'
}));
//It's now reading all the files that has the 'hbs' files
app.set('view engine', 'hbs');

app.use(express.json());

//Using the Public folder.  It has the CSS and images
app.use(express.static(path.join(__dirname, 'public')));

//Use the controllers files
//Point of it is to make it look cleaner and to make it look nicer
app.use(routes);

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});


/* End of the first handlebar */



