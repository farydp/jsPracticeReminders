require("dotenv").config()

const app = require("./app")
const connectDB = require("./config/db")
const MONGO_URI = process.env.MONGO_URI
const PORT =  process.env.PORT

async function start (){
    try {
        await connectDB(MONGO_URI)
            console.log("Db Connected succesfuly");
        app.listen(PORT, ()=> {
            console.log(`Server running in port ${PORT}`);
        })
    } catch (err) {
        console.error("Connexión error", err.message)
    }
}

start();