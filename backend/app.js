const express = require("express");
const app = express();
const PORT = 8000;

const adminRoute = require('./routes/adminRoute');
app.use("/app/admin",adminRoute);


app.listen(PORT,()=>{console.log(`Work on ${PORT}`);})