const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.set('view engine', 'hbs');

app.engine('hbs', exphbs.engine ({
    defaultLayout: 'main',
    extname: '.hbs'
}));


/*
TAKE THIS FUNCTION OUT BECAUSE FOR SOME REASON, THIS IS OVERWRITING THE SYSTEM.  EVEN IF WE WERE TO USE THE SECOND STATEMENT, IT'LL GO TO THIS!

app.get('/', (req, res) => {
    res.render('home');
});


*/

app.get('/', function (req, res) {
    //The 'home' is refering to the handlebars that's in the views folder
    res.render('home', {
        posts: [
            {
                author: 'Janith Kasun',
                image: 'https://picsum.photos/500/500',
                comments: [
                    'This is the first comment',
                    'This is the second comment',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.'
                ]
            },
            {
                author: 'John Doe',
                image: 'https://picsum.photos/500/500?2',
                comments: [
                ]
            }
        ]
    });
});

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});