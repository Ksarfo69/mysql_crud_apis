const express = require('express');
const cors = require('cors');
require('dotenv').config();
const employee_routes = require('./routes/employee_routes')

const app = express();
app.use(cors());
app.use(express.json());

app.use(employee_routes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});
