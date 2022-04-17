const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const posts = require('./routes/posts.js')

const app = express()

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.use('/posts',posts)
// d1kEOQ1A296lMmco
const CONNECTION_URL = `mongodb+srv://zaidsultan09:d1kEOQ1A296lMmco@cluster0.qqs2e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// mongodb+srv://zaidsultan09:<password>@cluster0.qqs2e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running On Port : ${PORT}`)
    })
}).catch((err) =>{
    console.log(err)
})

// mongoose.set('useFindAndModify',false)