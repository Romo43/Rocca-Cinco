const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport'); 
const { createAdminUser } = require('./libs/createUser');
require('./config/passport');

// Initializations

const app = express();

createAdminUser();

// Settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));  
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

// Middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



// Global Variables

// Routes

app.use(require('./routes/index.route'));
app.use(require('./routes/menu.route'));
app.use(require('./routes/promotions.route'));
app.use(require('./routes/admin.route'));

// Static Files

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;