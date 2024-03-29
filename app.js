const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/dish', require('./routes/dish.routes'))

const PORT  = config.get('port') || 5000

async function start(){
    try{
        await mongoose.connect(config.get("mongoUrl"), {
            useNewUrlParser: true
           
        })
        app.listen( PORT, () => {
            console.log(`Server starting in port ${PORT}`)
        })
    }
    catch(e){
        console.log("Server error", e.message)
        process.exit(1)
    }
}

start()