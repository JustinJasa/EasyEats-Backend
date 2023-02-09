const express = require("express");
const router = express.Router();

// get a particular recipe
router.route("/:id").get((req, res) => {
  let receipeId = req.params.id;
  res.send(`getting information for ${receipeId}`);
});

// modify all a recipe
router.route('/:id').put((req,res) => {
  let recipeId = req.params.id
  res.send(`updated information for ${recipeId}`)
})

// create a new category and add to the categories
router.route("/").post((req, res) => {
  console.log(req.body);
  res.json({
    status: "success",
  });
});

// modify all a recipe
router.route('/:id').delete((req,res) => {
  let recipeId = req.params.id
  res.send(`deleted ${recipeId}`)
})

module.exports = router;
