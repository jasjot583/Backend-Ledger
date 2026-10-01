const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require("dotenv").config()
const app = require("./app")
const connectToDB = require("./config/db")

connectToDB()

app.listen(3000, () => {
    console.log("server started on port 3000")
})