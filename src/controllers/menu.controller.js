const Menu = require('../models/Menu');
const menuCtrl = {};

menuCtrl.renderDishForm = async (req, res) => {
    res.render('admin/menu/new-dish');
};

menuCtrl.createNewDish = async (req, res) => {

    const { name, description, price, type, URLimage} = req.body;
    const data = new Menu({ name, description, price, type, URLimage});
    await Menu.create(data);
    //await data.save();
    //res.send('platillo');
    res.redirect('/admin/menu');
    
};

// Render MENU FOR admin
menuCtrl.renderMenuA = async (req, res) =>{
    const data = await Menu.find().lean();
    res.render('admin/menu/menu', {data});
};
// Render MENU FOR CUSTOMER
menuCtrl.renderMenu = async (req, res) => {
    const data = await Menu.find().lean();
    res.render('menu', { data })
    //res.render('admin/menu/menu');
  //  res.render('admin/menu/menu', {data});
    //res.status(200).json(data);
};

// Edit Dish

menuCtrl.renderEditForm = async (req, res) => {
   // const id = req.params.id;
    const data = await Menu.findById(req.params.id);
    res.render('admin/menu/edit-dish', {data});
};

menuCtrl.updateDish = async (req, res) => {
    console.log(req.body)
    const id = req.params.id;
    const { name, description, price, type, URLimage } = req.body;
    await Menu.findByIdAndUpdate(id, {name, description, price, type, URLimage });
    res.redirect('/admin/menu');
};

menuCtrl.deleteDish = async (req, res) => {
    //const id = req.params.id;
    await Menu.findByIdAndDelete(req.params.id);
    res.redirect('/admin/menu');
};

module.exports = menuCtrl;