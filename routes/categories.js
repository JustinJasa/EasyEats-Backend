import express from 'express'
import { getAllCategories } from '../controllers/queries.js'

const routerCategories = express.Router()

// get all categories
routerCategories.route("/").get(async (req, res) => {
    const queryResult = await getAllCategories()
    res.send(queryResult)
});

// get a particular category
routerCategories.route("/:id").get((req,res) => {
    let categoryId = req.params.id
    res.send(`getting category information for ${categoryId}`)
})

// create a new category and add to the categories
routerCategories.route("/").post((req,res) => {
    res.send("created a new category")
    console.log(req.body)
    res.json({
        status: 'success'
    })
})

export default routerCategories