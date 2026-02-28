require('dotenv').config();

const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

const mongoose = require('mongoose');

const express = require("express")

const app = express()
app.use(express.json()) // Ayuda a Express a leer Json. / Es un middleware

const tasks = []

console.log("URI que está usando la app:");
console.log(process.env.MONGO_URI);

await mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
});

// mongoose.connection.once('open', () => {
//   console.log('✅ Conectado correctamente a MongoDB');
// });


app.get("/", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.send("Hola")
})

app.get("/saludo", (req, res) => {
  res.send("Hola Desde /saludo")
})

app.get("/tasks", (req, res) => {
  res.json(tasks)
})

app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title ?? "none",
    completed: req.body.completed ?? false
  }

  tasks.push(newTask)

  res.status(201).json(newTask)

})

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000")
})