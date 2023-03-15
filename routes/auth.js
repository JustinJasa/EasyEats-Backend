import express from 'express'
import { compare, genSaltSync, hashSync} from "bcrypt";
import { getUserByEmail, createUser } from "../controllers/queries.js";
import jwt from "jsonwebtoken";

const routerAuth = express.Router()

// authenticates user
routerAuth.post("/login", async (req, res) => {
  try {
     // takes an email and password as a request
    const { email, password } = req.body;
    //checks if the email exists in database
    const account = await getUserByEmail(email);
    if (account.length == 0) {
      res.status(401).json("Email is incorrect");
    }

    //if user exists - compares password
    const isValid = compare(password, account.map((data) => data.password).toString());
    if (!isValid) {
      res.status(401).json("Password is incorrect");
    }

    // if credentials are correct sends back a json web toket
    const token = jwt.sign({ id: account.id }, 'cat123', { expiresIn: "1h" });
    res.status(200).json({ success:1, message:"login successful", token });
  } 
  // catches any random errors
  catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
 
});

// creates new user

routerAuth.post("/signup", async (req, res) => {
  try{ 
    let { username, email, password } = req.body;

    // check if account exists in database
    const account = await getUserByEmail(email);
    if (account.length !== 0) {
      res.status(401).json("Account Already Exists");
    }
    // bcrypts password
    const salt = genSaltSync(10)
    password = hashSync(password,salt)

    // creates new user
    const user = await createUser(username, email, password)
    
    // generate jwt token
    const token = jwt.sign({ id: user.id }, 'cat123', { expiresIn: "1h" });

    res.status(200).json({ success:1, message:"Account Created!", user, token });
  
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export default routerAuth