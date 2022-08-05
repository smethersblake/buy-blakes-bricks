const mongoose = require('mongoose');
<<<<<<< HEAD

mongoose.connect(process.env.MONGOBD_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
=======
require('dotenv').config()

mongoose.connect(
  // process.env.MONGODB_URI ||  'mongodb+srv://smethersblake:root@cluster0.vv0yki6.mongodb.net/buy-blakes-bricks',
  process.env.MONGODB_URI ||  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}`,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);
>>>>>>> develop

module.exports = mongoose.connection;