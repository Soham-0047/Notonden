const dotenv = require("dotenv")

dotenv.config();

const express = require("express")

const mongoose = require("mongoose")

const app = express();
const cors = require("cors")

const authroute = require("./routes/auth")

const useroute = require("./routes/user")

const studentroute = require("./routes/record")


mongoose.connect(
    process.env.DB
).then(() => console.log("Connection Successful")).catch((err) => console.log(err))

app.use(cors())
app.use(express.json());


app.use("/api/users",useroute)

app.use("/api/auth",authroute)

app.use("/api/records",studentroute)


const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})