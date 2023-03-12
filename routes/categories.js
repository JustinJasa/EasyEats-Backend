import express from 'express'
import { getAllCategories } from '../controllers/queries.js'

const routerCategories = express.Router()

// get all categories
routerCategories.route("/").get(async (req, res) => {
    const queryResult = await getAllCategories()
    res.send(queryResult)
});

export default routerCategories