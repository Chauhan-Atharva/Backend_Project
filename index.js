require('dotenv').config()
console.log("chai aur code");
const express = require('express')//require module syntax 
const app = express()//powerful variable - like Math class in cpp or java
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req,res) => {
    res.send("atharva.chauhan");
})

app.get("/login", (req,res) => {
    res.send("<h1> please login at chai aur code </h1> ");
})

app.get("/youtube" , (Req,Res) => {
    Res.send("<h2> chai aur code </h2>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
