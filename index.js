const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",

    credentials: true
}))

app.use("/api/todo", require("./routes/todoRoutes"))

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err.message || "Something Went Wrong" })

})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO DB CONNECTED");
    app.listen(process.env.PORT, console.log(`SERVER RUNNING: http://localhost:${process.env.PORT}`))
})