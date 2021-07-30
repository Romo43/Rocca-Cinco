require('dotenv').config();
const mongoose = require("mongoose")

//const { Rocca_cinco_MONGODB_HOST, Rocca_cinco_MONGODB_DATABASE} = process.env;
//const MONGODB_URI = `mongodb://${Rocca_cinco_MONGODB_HOST}/${Rocca_cinco_MONGODB_DATABASE}`;

const { Rocca_cinco_MONGODB_URI } = process.env;
const MONGODB_URI = Rocca_cinco_MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}) .then(db => console.log("Database is connected"))
    .catch(err => console.log(err));