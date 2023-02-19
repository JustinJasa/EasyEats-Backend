//importing the database
import pool from '../services/db.js'

// Get all categories
export const getAllCategories = async () => {
    const [rows] = await pool.query(`
    SELECT name FROM categories`)

    return rows
};

// Get a category by its name
export const getCategory = async () => {
    
};

// Get a category by its ID
export const setSearch = async () => {
    
};

// getting all recipes
export const getAllRecipes = async () => {
    
};

// getting specific recipe
export const getRecipeId = async () => {
    
};

// creating a recipe
export const createRecipe = async () => {
    
};

//deleting recipe
export const deleteRecipe = async () => {
    
};

// update/edit recipe
export const editRecipe = async () => {
    
};

export const createAccount = async () => {
    
};

export const updateAccount = async () => {
    
};

export const deleteAccout = async () => {
    
};