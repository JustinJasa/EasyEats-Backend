//importing the database
import pool from '../services/db.js'

//Queries to database

// get all categories
export const getAllCategories = async () => {
    const [rows] = await pool.query(`
    SELECT name FROM categories`)

    return rows
};

// get a category
export const getCategory = (req, res, next) => {
    res.send("getting a category")
};

// searching for recipe
export const setSearch = (req, res, next) => {
    res.send("searching for an item")
};

// getting all recipes
export const getAllRecipes = (req, res, next) => {
    res.send("getting all recipes")
};

// getting specific recipe
export const getRecipeId = (req, res, next) => {
    res.send("getting all a recipe")
};

// creating a recipe
export const createRecipe = (req, res, next) => {
    res.send("getting all a recipe")
};

//deleting recipe
export const deleteRecipe = (req, res, next) => {
    res.send("getting all a recipe")
};

// update/edit recipe
export const editRecipe = (req, res, next) => {
    res.send("getting all a recipe")
};

export const createAccount = (req, res, next) => {
    res.send("getting all a recipe")
};

export const updateAccount = (req, res, next) => {
    res.send("getting all a recipe")
};

export const deleteAccout = (req, res, next) => {
    res.send("getting all a recipe")
};