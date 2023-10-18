const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');

const PORT = process.env.PORT || 3333;

// Create the server app
use.express();

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}));
// handlebar middleware
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(session({
    secret: 'TeiflingBard',
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static('public'));


db.sync()
.then(() => {
    app.listen(PORT, () => console.log(`happy surfing on ${PORT}`));
});
