import express from 'express'

const routerRecipes = express.Router();

// get a particular recipe
routerRecipes.route("/:id").get((req, res) => {
  let receipeId = req.params.id;
  res.send(`getting information for ${receipeId}`);
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