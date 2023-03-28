
const express = require("express")

const app = express()

app.get('/', (req, res)=>{
    res.send("change the route to /api")
})
app.get('/api',(req, res)=>{
    res.send("the route is /api, change it to /main to see the answer")
})

app.get('/main', (req, res)=>{
    res.send(JSON.stringify({message:"Express is a node js web application framework that provides broad features for building web and mobile applications. Express provides methods to specify what function is called for a particular HTTP verb ( GET , POST , SET , etc.) and URL pattern (Route), and methods to specify what template (view) engine is used, where template files are located, and what template to use to render a response."}))
})
app.listen(4600)