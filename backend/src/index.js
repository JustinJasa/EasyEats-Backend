const express = require("express")
const categories = require("../routes/categories")
const recipe = require('../routes/recipe')
const mysql = require('mysql2')
const dotenv = require('dotenv')

const PORT = process.env.PORT || 8000

const app = express();

dotenv.config()

const database = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

module.exports = database;

app.use(express.json())

app.use('/categories', categories)
app.use('/recipe', recipe)


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log('Example app listening on port 8000!');
});

app.use((err, req, res) => { 
    console.log(error)
    res.status(500).send("Something Broke!")
})

module.exports = database