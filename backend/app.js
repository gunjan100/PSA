require('dotenv').config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./dBConnection");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const servicesRoute = require('./router/services-router')
const adminRoute = require('./router/admin-router')
const clientRoute = require('./router/client-router')
const bodyParser = require('body-parser');

// Connect to MongoDB
dbConnection();
const app = express();

// Middleware
const corsOPtion = {
  origin: "http://localhost:5173",
  method: "GET, PUT, POST, UPDATE, DELETE",
  credentials: true,
};

app.use(cors(corsOPtion));
// app.use(express.json());
app.use(bodyParser.json());

// Auth Routes
app.use("/api", authRoute);
app.use("/api", contactRoute);
app.use('/api', servicesRoute)

app.use('/api/admin', adminRoute)
app.use('/api/cl', clientRoute)

app.listen(5000, () => {
  console.log("Server is running on port");
});
