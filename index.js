const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require('./database');
const productsRouter = require('./routes/products');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/products', productsRouter);
app.use('/api/users', userRoutes);

// Basic Routes
app.get("/", (req, res)=>{
    res.json({message: "welcome to the API"})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})