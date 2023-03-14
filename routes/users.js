import express from 'express'
import bcrypt from 'bcrypt'
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/queries.js'

const {genSaltSync, hashSync} = bcrypt

const routerUsers = express.Router()

//  - - - - - - - - - - - - -
//  - - - - - GET - - - - - -
//  - - - - - - - - - - - - -

// GET  ---  Get all users
routerUsers.route("/all").get(async (req, res) => {
    const queryResult = await getAllUsers()
    res.status(200).send(queryResult)
});

// GET  ---  Get a single user by userId
routerUsers.route("/:userId").get(async (req, res) => {
    const userId = req.params.userId
    const queryResult = await getUser(userId)
    res.status(200).send(queryResult)
});

//  - - - - - - - - - - - - -
//  - - - - - POST  - - - - -
//  - - - - - - - - - - - - -

// POST  ---  Insert a new user
routerUsers.route("/new").post(async (req, res) => {
    let { username, email, password } = req.body
    const salt = genSaltSync(10)
    password = hashSync(password,salt)
    const queryResult = await createUser(username, email, password)
    res.status(200).send(queryResult)
});


//  - - - - - - - - - - - - -
//  - - - - - PUT - - - - - -
//  - - - - - - - - - - - - -

// PUT  ---  Edit a user
routerUsers.route("/:userId/edit").put(async (req, res) => {
    const userId = req.params.userId
    const { username, password } = req.body
    const queryResult = await updateUser(userId, username, password)
    res.status(200).send(queryResult)
});

//  - - - - - - - - - - - - -
//  - - - - - DELETE- - - - -
//  - - - - - - - - - - - - -

// DELETE --- Delete a user
routerUsers.route("/:userId/delete").delete(async (req, res) => {
    const userId = req.params.userId
    deleteUser(userId)

    res.status(200).send("User deleted")
})

export default routerUsers
