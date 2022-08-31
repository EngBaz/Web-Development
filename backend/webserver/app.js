import express from 'express'
import { getInventory } from './inventory.js';
import { getUsername, comparePassword } from './login.js';

//1. Express Configuration
const app = express()
const port = 3000
app.use(express.json());

/**
 * Routes Definition
 */

// Root
app.get('/', (req, res) => {
    res.send('Hello from NodeJS Webserver!')
})

// Login
app.post('/login', async (req, res) => {

    //1. Get Username and password from request
    const username = req.body.username;
    const password = req.body.password;

    //2. Validate that user exists on database, if not, respond back with error
    const usernameExists = await getUsername(username);
    if (usernameExists.length === 0) {
        return res.status(401).send({ message: "Invalid username or password" });
    }

    //3. Validate that user password is correct, if not respond back with error
    const passwordValidated = await comparePassword(username, password);
    if(passwordValidated.length === 0){
        return res.status(401).send({ message: "Invalid username or password" });
    }

    return res.status(200).send({
        message: "Login Successfull",
        token: "ABCD"
    });
});

// Inventory
app.get('/inventory', async (req, res) => {
    console.log(req);
    //1. Make sure that token exists in request
    if(!req.body || !req.body.token){
        return res.status(401).send("Forbidden");
    }

    //2. Make sure token is valid
    if(req.body.token != 'ABCD'){
        return res.status(401).send("Forbidden");
    }

    //3. Respond back with inventory
    const inventory = await getInventory();
    return res.status(200).send(inventory);
});


app.listen(port, () => {
    console.log(`Webserver listening on port ${port}`)
})