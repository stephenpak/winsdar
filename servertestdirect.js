const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


//Go to the controllers file
const routes = require('./controllers_two');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

//Using the connection.js in the config folder
//const sequelize = require('./config/connection');


/*This is the setup for one of the handlebars */
const app = express();

const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);


app.set('view engine', 'hbs');


//Start by identifying the handlebars that we're using
app.engine('hbs', exphbs.engine({
    defaultLayout: 'mainattempt',
    extname: '.hbs'
}));


//It's now reading all the files that has the 'hbs' files
app.set('view engine', 'hbs');


//Using the Public folder.  It has the CSS and images
app.use(express.static(path.join(__dirname, 'public')));


//Use the controllers files
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  

/* End of the first handlebar */



