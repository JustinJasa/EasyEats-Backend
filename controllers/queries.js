//importing the database
import pool from '../services/db.js'

// Get name of ALL categories
export const getAllCategories = async () => {
    const [rows] = await pool.query(`
    SELECT name FROM categories`)

    return rows
};

// Get basic info (recipeName, user) of ALL recipes
export const getAllRecipes = async () => {
    const [rows] = await pool.query(`
    SELECT r.name, u.username
    FROM users u
    INNER JOIN recipes r ON u.user_id = r.user_id`)
    
    return rows
};

// Get basic info (recipeName, user) of recipes by categoryName
export const getRecipesByCategoryName = async (categoryName) => {
    const [rows] = await pool.query(`
    SELECT r.name, u.username
    FROM users u
    INNER JOIN recipes r ON u.user_id = r.user_id
    INNER JOIN recipe_categories rc ON r.recipe_id = rc.recipe_id
    INNER JOIN categories c ON rc.category_id = c.category_id
    WHERE c.name = ?`, [categoryName])

    return rows
}

// Get basic info (recipeName, user) of recipes by recipeName
export const getRecipesByRecipeName = async (recipeName) => {
    const [rows] = await pool.query(`
    SELECT r.name, u.username
    FROM users u
    INNER JOIN recipes r ON u.user_id = r.user_id
    WHERE r.name LIKE '%?%'`, [recipeName])

    return rows
}

// Get info (name, description, username, price_range) of a single recipe by recipe_id
export const getRecipeInfo = async (recipeId) => {
    const [row] = await pool.query(`
    SELECT r.name, r.description, u.username, r.time_hours, r.time_minutes, r.price_range
    FROM users u
    INNER JOIN recipes r ON u.user_id = r.user_id
    WHERE r.recipe_id = ?`, [recipeId])

    return row
}

// Get categories of a recipe by recipe_id
export const getRecipeCategories = async (recipeId) => {
    const [rows] = await pool.query(`
    SELECT c.name
    FROM recipes r
    INNER JOIN recipe_categories rc on r.recipe_id = rc.recipe_id
    INNER JOIN categories c ON rc.category_id = c.category_id
    WHERE r.recipe_id = ?`, [recipeId])

    return rows
}

// Get ingredients of a recipe by recipe_id
export const getRecipeIngredients = async (recipeId) => {
    const [rows] = await pool.query(`
    SELECT i.description
    FROM ingredients i
    WHERE i.recipe_id = ?`, [recipeId])

    return rows
}


// Get steps of a recipe by recipe_id
export const getRecipeSteps = async (recipeId) => {
    const [rows] = await pool.query(`
    SELECT s.description
    FROM steps s
    WHERE s.recipe_id = ?`, [recipeId])

    return rows
}

// Get user information by user_id
export const getUserInfo = async (userId) => {
    const [row] = await pool.query(`
    SELECT *
    FROM users
    WHERE u.user_id = ?`, [userId])

    return row
}

