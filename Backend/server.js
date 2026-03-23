const express = require('express');
const connectDB = require('./src/config/db');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;
connectDB();


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
