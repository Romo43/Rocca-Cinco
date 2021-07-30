const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/Admin');


passport.use(new LocalStrategy({
    usernameField: 'email',
    passpordField: 'password',

}, async (email, password, done) => {

    // Match username Admin
    const user = await Admin.findOne({email})
    if(!user) {
        
        return done(null, false, {message: 'Usuario no encontrado'});
    }else{
        // Math Password Admin
        const match = await user.matchPassword(password)
        if(match){
            return done(null, user);
        }
        else{
            return done(null, false, {message: 'Contraseña incorrecta'});
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) =>{
    Admin.findById(id, (err, user) => {
        done(err, user);
    })
});