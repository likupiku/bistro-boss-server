const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const port =process.env.Port || 5000;

// middleware
app.use(cors());
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Boss is sitting")
})

app.listen(port,()=>{
    console.log(`Boss is sitting on ${port}`)
})
