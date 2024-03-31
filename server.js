const express = require('express');
const path = require('path');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) =>{
    res.render("index");
});
app.get("/index", (req, res) =>{
    res.render("index");
})
app.listen(8080, () => {
    console.log("server start at localhost 8080");
});