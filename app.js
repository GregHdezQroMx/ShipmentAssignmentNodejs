require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())

const port = process.env.PORT || 3000

/**
* Here we call routes :)
*/
app.use("/api", require("./routes"))


app.listen( port, () => {
    console.log(`Tu app esta lista por http://localhost:${port}`)
})

dbConnect()