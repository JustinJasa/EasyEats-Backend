import express from 'express'
import { getAllRecipes, getRecipesByCategoryName, getRecipesByRecipeName } from '../controllers/queries.js';

const routerRecipes = express.Router();

// GET  ---  Get all recipes
routerRecipes.route("/").get(async (req, res) => {
  const queryResult = await getAllRecipes()
  res.send(queryResult)
});

// GET  ---  Get recipes by categoryName
routerRecipes.route("/category/:categoryName").get(async (req, res) => {
  const queryResult = await getRecipesByCategoryName(req.params.categoryName)
  res.send(queryResult)
});

// GET  ---  Get recipes by recipeName
routerRecipes.route("/:recipeName").get(async (req, res) => {
  const queryResult = await getRecipesByRecipeName(req.params.recipeName)
  res.send(queryResult)
});

// modify all a recipe
routerRecipes.route('/:id').put((req,res) => {
  let recipeId = req.params.id
  res.send(`updated information for ${recipeId}`)
})

// create a new receipe
routerRecipes.route("/").post((req, res) => {
  res.send("created a new category")
  console.log(req.body);
  res.json({
    status: "success",
  });
});

// delete a recipe
routerRecipes.route('/:id').delete((req,res) => {
  let recipeId = req.params.id
  res.send(`deleted ${recipeId}`)
})

export default routerRecipes