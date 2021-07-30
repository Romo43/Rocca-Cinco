const adminCtrl = {};
const passport = require('passport');

// Render Admin Panel
adminCtrl.renderAdmin = (req, res) =>{
    res.render('admin/admin');
};

// Login
adminCtrl.renderLoginForm = (req, res) =>{
    res.render('admin/signin');
    
};

adminCtrl.signin = passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/admin/signin",
    failureFlash: true,
});

adminCtrl.logout = (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out now.");
    res.redirect("/admin/signin");
};

module.exports = adminCtrl;