const express = require("express");
const router = express.Router();


// get all categories
router.route("/").get((req, res) => {
  res.send("getting all categories");
});

// get a particular category
router.route("/:id").get((req,res) => {
    let categoryId = req.params.id
    res.send(`getting information for ${categoryId}`)
})

// create a new category and add to the categories
router.route("/").post((req,res) => {
    res.send("created a new category")
    console.log(req.body)
    res.json({
        status: 'success'
    })
})

module.exports = router;
