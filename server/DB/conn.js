require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('../routes')); mongoose.connect(process.env.MONGOBD_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}` , {
    // 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
mongoose.set('debug', true)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
