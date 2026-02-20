const express = require("express")

const app = express()
app.use(express.json()) // Ayuda a Express a leer Json. / Es un middleware

app.get("/", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.send("Hola")
})

app.get("/saludo", (req, res) => {
  res.send("Hola Desde /saludo")
})

app.post("task", (req, res) => {
  console.log("Body received:", req.body);

  res.status(201).json(
    {
      message: "Tarea recibida",
      data: req.body
    })
})

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000")
})