const createUser = {};
const Admin = require('../models/Admin');

createUser.createAdminUser = async () => {
  const userFound = await Admin.findOne({ email: "admin@localhost" });

  if (userFound) return;

  const newUser = new Admin({
    username: "admin",
    email: "admin@localhost",
  });

  newUser.password = await newUser.encryptPassword("adminpassword");

  const admin = await newUser.save();

  console.log("Admin user created", admin);
};
module.exports = createUser;