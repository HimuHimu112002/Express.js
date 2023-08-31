const express = require('express')


app = express();

// browser only get method access korte pare
//simple string response usign get method
app.get("/", function(req, res) {
    res.send("Express.js application")
})

//simple string response usign post method
app.post("/", function(req, res) {
    res.send("Express.js application post method")
})

// routing section
app.get("/about", function(req, res) {
    res.send("Express.js application about page")
    //send and end method same kaj kore
    // send method res er body access kore and end method res er last asccess kore
})

// Status code change section
app.get("/sta", function(req, res) {
    res.status(401).end("Unautho....")
})


// Json section
app.get("/jsnP", function(req, res) {

    let myarray = [
        {
            name: "himu",
            age: "25"
        }
    ]
    res.json(myarray)
})


// Download section
app.get("/down", function(req, res) {
    res.download("./upload/ba.jpg")
})

// Redirect section
app.get("/red1", function(req, res) {
    res.redirect("http://localhost:8000/red2")
})
app.get("/red2", function(req, res) {
    res.send("This is redirect")
})

// Response header oparation section
app.get("/head", function(req, res) {
    res.append("name", "himu")
    res.status(201).end("hello world")

})

// Cookies oparation section
app.get("/cook", function(req, res) {
    res.cookie("name", "himu")
    res.end("hello world")

})

// Cookies clear oparation section
app.get("/cookd", function(req, res) {
    res.clearCookie("name")
    res.end("cookie clear world")

})

// =================== query===================

// query oparation section
app.get("/query", function(req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(lastName+" "+firstName )
    //localhost:8000?firstName=himu&lastName=md

})


app.get("/header", function(req, res) {

    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.end(lastName+" "+firstName )

})

app.get("/user", function(req, res) {

    let firstName = req.header('User-Agent');
    res.end(firstName)

})

//============================= POST ================================

app.post("/simple1", function(req, res) {
    res.send("This is post")
})

// query oparation section
app.post("/simple2", function(req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.send(firstName+" "+lastName )
    //localhost:8000?firstName=himu&lastName=md

})


app.post("/simple3", function(req, res) {
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.send(lastName+" "+firstName )

})


app.post("/simple4", function(req, res) {

    let myarray = [
        {
            name: "himu",
            age: "25"
        }
    ]
    res.json(myarray)
})

app.post("/simple5", function(req, res) {
    let JsonData = req.body;
    let JsonString = JSON.stringify(JsonData);
    res.send(JsonString)
})


app.listen(8000, function() {
    console.log("Server is running")
})