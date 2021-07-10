require("dotenv").config();
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const exp = require('constants');

//Database
require("./database");

// Initiliazations
const app = express();

// Settings
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));  
app.engine('.hbs', exphbs({
defaultLayout: 'main',
layoutsDir: path.join(app.get('views'),'layaouts'),
partialsDir: path.join(app.get('views'), 'partials'),
extname: '.hbs'
}));
app.set('view engine', '.hbs');
// Midlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

// Global Variables

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/admin'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});     