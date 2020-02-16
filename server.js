const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const http = require('http').createServer(app);
const MONGO_CONNECTION = "mongodb://localhost:27018/books"
//routes

const userRoutes = require("./routes/userRoutes")

app.get("/",(req,res)=>{
    res.send("<h1>Get Books Server</h1>")
})

//middleware
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use("/user",userRoutes)
const PORT = 3001;

const server = async() => {
    try {
        await mongoose.connect(MONGO_CONNECTION,{
            useNewUrlParser: true,
            useCreateIndex:true,
            useFindAndModify:true,
            useUnifiedTopology:true,
            
        })
        http.listen(PORT,() => {
            console.log("Server started at",PORT);
            
        })
    } catch (error) {
        console.log(error);
           
    }
}

server();