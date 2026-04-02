const express = require('express');
const connectDB = require('./src/config/db');
require('dotenv').config();
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 8000;
connectDB();


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
