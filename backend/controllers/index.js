//importing the database
const database = require('../src/index')

//Queries to database

// get all categories
exports.getAllCategories = (req, res, next) => {
    res.send("getting all categories")
};

// get a category
exports.getCategory = (req, res, next) => {
    res.send("getting a category")
};

// searching for recipe
exports.setSearch = (req, res, next) => {
    res.send("searching for an item")
};

// getting all recipes
exports.getAllRecipes = (req, res, next) => {
    res.send("getting all recipes")
};

// getting specific recipe
exports.getRecipeId = (req, res, next) => {
    res.send("getting all a recipe")
};

// creating a recipe
exports.createRecipe = (req, res, next) => {
    res.send("getting all a recipe")
};

//deleting recipe
exports.deleteRecipe = (req, res, next) => {
    res.send("getting all a recipe")
};

// update/edit recipe
exports.editRecipe = (req, res, next) => {
    res.send("getting all a recipe")
};

exports.createAccount = (req, res, next) => {
    res.send("getting all a recipe")
};

exports.updateAccount = (req, res, next) => {
    res.send("getting all a recipe")
};

exports.deleteAccout = (req, res, next) => {
    res.send("getting all a recipe")
};