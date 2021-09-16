//Loading Basic Modules
const mongoose = require('mongoose');
const express = require('express');
var app = express();

//Requireing .env
require('dotenv').config()

//Require MiddleWare
const cors = require('cors')

//Require Swagger Modules
const swaggerJsDoc = require("swagger-jsdoc");
const SwaggerUi = require("swagger-ui-express");

//Requiring all router to call
const user = require("./routers/application/user")
const profile = require("./routers/application/profile")
const adminsignin = require("./routers/admin/signin")


//Making Connection To DataBase
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

//Making Connection String
var connection_string = `mongodb://localhost:27017/code-testing`

//Making Secure Connection Use This Connection String
//var connection_string = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}:${process.env.DB_PORT}/${process.env.DB_NAME}`


//Making Connection
mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
            console.log("Database connected")
      })
      .catch((err) => {
            console.log(`Error connecting Database: ${err}`)
      })

//Using MiddleWare
app.use(express.json())
app.use(cors())


//Making api calls
app.use("/api", user)

app.use("/api", profile)

app.use("/api", adminsignin)


//Making Swagger 
const options = {
      definition: {
            openapi: "3.0.0",
            info: {
                  title: "PAYMENT-GATWAY",
                  version: "1.0.0",
                  description: "A documntation for prototype"
            },
            servers: [
                  {
                        url: "http://localhost:8000/",
                  },
            ],
      },
      apis: ["./docs/*.js", "./docs/*/*.js"],
};

//Making Swagger Call
const swaggerDocs = swaggerJsDoc(options)
console.log(`swaggerDocs is running on http://localhost:${process.env.APPLICATION_PORT}/api-docs`)
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));


//Making app live on this port 
app.listen(process.env.APPLICATION_PORT, () => {
      console.log(`prototype apis is running on ${process.env.APPLICATION_PORT}`)
})