import express from 'express'
import { getAllRecipes, getRecipesByCategoryName, getRecipesByRecipeName, getRecipeInfo, getRecipeCategories, 
         getRecipeIngredients, getRecipeSteps, getRecipeComments, createRecipe, createRecipeCategories, 
         createRecipeIngredients, createRecipeSteps, updateRecipeInfo, deleteRecipeCategories, deleteRecipeIngredients,
         deleteRecipeSteps } from '../controllers/queries.js';

const routerRecipes = express.Router();

//  - - - - - - - - - - - - -
//  - - - - - GET - - - - - -
//  - - - - - - - - - - - - -

// GET  ---  Get all recipes
routerRecipes.route("/").get(async (req, res) => {
  const queryResult = await getAllRecipes()
  res.status(200).send(queryResult)
});

// GET  ---  Get recipes by categoryName
routerRecipes.route("/category/:categoryName").get(async (req, res) => {
  const queryResult = await getRecipesByCategoryName(req.params.categoryName)
  res.status(200).send(queryResult)
});

// GET  ---  Get recipes by recipeName
routerRecipes.route("/:recipeName").get(async (req, res) => {
  const queryResult = await getRecipesByRecipeName(req.params.recipeName)
  res.status(200).send(queryResult)
});

// GET  --- Get recipe basic info by recipeId
routerRecipes.route("/:recipeId/basicInfo").get(async (req, res) => {
  const queryResult = await getRecipeInfo(req.params.recipeId)
  res.status(200).send(queryResult)
});

// GET  --- Get recipe categories by recipeId
routerRecipes.route("/:recipeId/categories").get(async (req, res) => {
  const queryResult = await getRecipeCategories(req.params.recipeId)
  res.status(200).send(queryResult)
});

// GET  --- Get recipe ingredients by recipeId
routerRecipes.route("/:recipeId/ingredients").get(async (req, res) => {
  const queryResult = await getRecipeIngredients(req.params.recipeId)
  res.status(200).send(queryResult)
});

// GET  --- Get recipe steps by recipeId
routerRecipes.route("/:recipeId/steps").get(async (req, res) => {
  const queryResult = await getRecipeSteps(req.params.recipeId)
  res.status(200).send(queryResult)
});

//  GET --- Get recipe comments by recipeId
routerRecipes.route("/:recipeId/comments").get(async (req, res) => {
  const queryResult = await getRecipeComments(req.params.recipeId)
  res.status(200).send(queryResult)
});

//  - - - - - - - - - - - - -
//  - - - - - POST - - - - -
//  - - - - - - - - - - - - -

//  POST --- Insert a new recipe's basic info
routerRecipes.route("/newRecipe").post(async (req, res) => {
  const { userId, name, description, time_h, time_m, price } = req.body
  const queryResult = await createRecipe(userId, name, description, time_h, time_m, price)

  res.status(200).send(queryResult)
})

//  POST --- Insert a recipe's categories
routerRecipes.route("/:recipeId/categories").post(async (req, res) => {
  const recipeId = req.params.recipeId
  const { categories } = req.body

  for(let i = 0; i < categories.length; i++) {
    const categoryId = categories[i]
    const queryResult = await createRecipeCategories(recipeId, categoryId)
  }
  res.status(200).send(`Added ${categories.length} categories to recipe ${recipeId}`)
})

//  POST --- Insert a recipe's ingredients
routerRecipes.route("/:recipeId/ingredients").post(async (req, res) => {
  const recipeId = req.params.recipeId
  const { ingredients } = req.body

  for(let i = 0; i < ingredients.length; i++) {
    const description = ingredients[i]
    const queryResult = await createRecipeIngredients(recipeId, description)
  }

  res.status(200).send(`Added ${ingredients.length} ingredients to recipe ${recipeId}`)
})

//  POST --- Insert a recipe's steps
routerRecipes.route("/:recipeId/steps").post(async (req, res) => {
  const recipeId = req.params.recipeId
  const { steps } = req.body

  for(let i = 0; i < steps.length; i++) {
    const description = steps[i]
    const queryResult = await createRecipeSteps(recipeId, description)
  }

  res.status(200).send(`Added ${steps.length} steps to recipe ${recipeId}`)
})

//  - - - - - - - - - - - - -
//  - - - - - PUT - - - - - -
//  - - - - - - - - - - - - -

// PUT  --- Update the basic info of a recipe
routerRecipes.route("/:recipeId/basicInfo").put(async (req, res) => {
  const recipeId = req.params.recipeId
  const { name, description, time_h, time_m, price } = req.body
  const queryResult = await updateRecipeInfo(recipeId, name, description, time_h, time_m, price)

  res.status(200).send(queryResult)
})

// PUT  --- Update the categories of a recipe
routerRecipes.route("/:recipeId/categories").put(async (req, res) => {
  const recipeId = req.params.recipeId
  const { categories } = req.body
  
  // Clear categories for current recipe
  deleteRecipeCategories(recipeId)

  // Then add the new ones
  for(let i = 0; i < categories.length; i++) {
    const categoryId = categories[i]
    const queryResult = await createRecipeCategories(recipeId, categoryId)
  }
  res.status(200).send(`Recipe ${recipeId} now has ${categories.length} categories`)
})

// PUT  --- Update the ingredients of a recipe
routerRecipes.route("/:recipeId/ingredients").put(async (req, res) => {
  const recipeId = req.params.recipeId
  const { ingredients } = req.body

  // Delete ingredients from ingredients table
  deleteRecipeIngredients(recipeId)

  // Then add the new ones
  for(let i = 0; i < ingredients.length; i++) {
    const ingredientId = ingredient[i]
    const queryResult = await createRecipeIngredients(recipeId, ingredientId)
  }
  res.status(200).send(`Recipe ${recipeId} now has ${ingredients.length} ingredients`)
})

// PUT  --- Update the steps of a recipe
routerRecipes.route("/:recipeId/steps").put(async (req, res) => {
  const recipeId = req.params.recipeId
  const { steps } = req.body

  // Delete ingredients from ingredients table
  deleteRecipeSteps(recipeId)

  // Then add the new ones
  for(let i = 0; i < steps.length; i++) {
    const stepId = steps[i]
    const queryResult = await createRecipeSteps(recipeId, stepId)
  }
  res.status(200).send(`Recipe ${recipeId} now has ${steps.length} steps`)
})

export default routerRecipes
