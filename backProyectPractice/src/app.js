// configura express  (middlewares, rutas)

const express = require("express")
const app = express();
const PORT = 3000;
app.use(express.json())

app.get("/health", (req, res) => {
    res.status(200).json({status: "ok"})
    console.log("health endpoint accessed");
})

module.exports = app;