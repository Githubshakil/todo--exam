const express =require("express")
const app = express()
const mongoose = require('mongoose');
// const registrationController = require("./controller/registrationController")
const registrationControllertwo = require("./controller/registrationControllertwo")
const usersController =  require('./controller/usersController')
const editController = require('./controller/editController')
const deleteController = require('./controller/deleteController')

mongoose.connect('mongodb+srv://todo:dS6O6752SjaxoYP9@cluster0.a1u9x8z.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('mongodb connected')
});
app.use(express.json())

// app.post("/registration", registrationController)
app.post("/registrationtwo",registrationControllertwo )
app.get('/users',usersController)  
app.put('/edit',editController)
app.delete('/delete',deleteController)

app.listen("8000", () => {
    console.log("server is running")
})

//Registration page
//Login
//CRUD with image upload (Create, Read, Update, Delete)
//Access Token with Refresh Token
//Logout

// password mongodb: dS6O6752SjaxoYP9