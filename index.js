const express = require("express")
const categories = require("./routes/categories")
const recipe = require('./routes/recipe')

const PORT = process.env.PORT || 8000

const app = express();

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

