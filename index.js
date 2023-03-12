import express from 'express'
import routerCategories from './routes/categories.js'
import routerRecipes from './routes/recipes.js'
import routerUsers from './routes/users.js'
import cors from 'cors'

const PORT = process.env.PORT || 8000

const app = express();
app.use(cors())

app.use(express.json())

app.use('/categories', routerCategories)
app.use('/recipes', routerRecipes)
app.use('/users', routerUsers)


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log('Example app listening on port 8000!');
});

app.use((err, req, res, next) => { 
    console.log(err.stack)
    res.status(500).send("Something Broke!")
})

