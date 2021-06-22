const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRoute = require("./routes/UserRoute");
const adminRoute = require("./routes/AdminRoute");
const User = require("./models/User");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/asg7", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.info("MongoDB connected successfully");
    }).catch(() => {
        console.error("MongoDB connection failed")
    });

const PORT = 4001;

app.listen(PORT, () => {
    console.log(`The server is running on port:${PORT}`);
});


app.use(userRoute);
app.use(adminRoute);
