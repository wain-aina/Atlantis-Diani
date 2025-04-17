const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();

mongoose.connect("mongodb+srv://snowflakeske:0TMpo8GN2sMeCOxy@cluster0.c0zhj1g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname+"/uploads")); 

app.use(cors({
    credentials: true,
    origin: [ 'http://localhost:3000' ],
}));

const userAuthRoutes = require("./routes/userAuthRoutes");
const placeRoutes = require("./routes/placeRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use("/", userAuthRoutes);
app.use("/", placeRoutes);
app.use("/",bookingRoutes);

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
})

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
});