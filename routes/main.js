// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

// Root/default route
router.get("/", (req, res) => res.send(`
    

    <!DOCTYPE html>
<html lang="en">


<head>

 <title>CSS Styles: External, Internal, and Inline</title>

 <link rel="stylesheet" type="text/css" href="styles.css">

 <style>

 body {
 background-color: rgba(128, 126, 131, 1);
 }

 h1 {
 font-family: 'verdana';
 color: rgba(4, 240, 138, 1);
 text-align: left;
 }
 </style>

</head>


<body>
 <h1>Marzhan Anbia's Bio</h1>

 <h2>What is this?</h2>

 <p style="color: rgb(255, 255, 255)">This is my personal website where I give some information about me.</p>
 

 <h2>About Me</h2>
 <p style="color: rgb(255, 255, 255)">Hello! My name is Marzhan Anbia. I am a software developer and computer science student based in London, UK.</p>
 <h2>Skills</h2>
 <p style="color: rgb(255, 255, 255)">I have experience with JavaScript, Python, HTML, and some CSS. I am also familiar with frameworks such as Node.js.</p>
 <h2>Education</h2>

 <p style="color: rgb(255, 255, 255)">Currently studying Computer Science at Goldsmiths University. I am on the cyber security pathway in my third and final year of my bachelors degree.</p>


 <p></p>

 <h2>Info</h2>
 <p style="color: rgb(255, 255, 255)">- To learn more about me, visit the <a href="/about" style="color: rgb(255, 255, 255)">About Me</a> page.</p>
 <p style="color: rgb(255, 255, 255)">- To contact me, visit the <a href="/contact" style="color: rgb(255, 255, 255)">Contact Me</a> page.</p>
 <p style="color: rgb(255, 255, 255)">- To see the current date and time, visit the <a href="/date" style="color: rgb(255, 255, 255)">Date</a> page.</p>
 

 <p style="color: rgb(255, 255, 255)">:)</p>

</body>

</html>
    
    
    
    
    
    `)); //this sends "Hello World!" as a response

// About route
router.get("/about", (req, res) => res.send (`
        <html>
        <head><title>About Marzhan</title></head>
        <body style="background-color: lightblue; font-family: Verdana;">
            <h1>About Marzhan</h1>
            <p>Hello! I'm Marzhan Anbia, a passionate developer based in London.</p>
            <p>I am an aspiring cyber security novice and I am enthusiastic about ethical hacking.</p>
            <p>I have a keen interest in learning about network security and penetration testing.</p>
            <p>I am studying at Goldsmiths University and at the cyber security pathway on my third and final year.</p>
            <p>I have experience with various programming languages and tools, including Python, JavaScript, and HTML.</p>
        </body>
        </html>`)); 

// Contact route
router.get("/contact", (req, res) => res.send (`
        <html>
        <head><title>Contact Marzhan</title></head>
        <body style="background-color: lightgreen; font-family: Verdana;">
            <h1>Contact Me</h1>
            <p>Email: manbi001@campus.goldsmiths.ac.uk</p>
            <p>Let's get in touch!</p>
        </body>
        </html>`)); //this also sends an h1 element as a response


// Date route
// This route sends an HTML page that displays the current date and time
router.get("/date", (req, res) => res.send (`
    
<!DOCTYPE html>
<html>
<body>

<h1>Current date</h1>
<p>This page displays a new date object with the current date and time:</p>

<p id="demo"></p>

<script>
const d = new Date();
document.getElementById("demo").innerHTML = d;
</script>

</body>
</html>

`));


// Welcome route with parameterised name
// Usage: /welcome/John or /welcome/Sarah
router.get("/welcome/:name", (req, res) => {
    const userName = req.params.name;
    res.send(`<h1>Welcome ${userName}!</h1>`);
});


// Chain route demonstrating two handlers and next()
// First handler writes a header and calls next(), second handler finishes the response
router.get('/chain', (req, res, next) => {

    // write a partial response (this doesn't end the response)
    res.write('<p>Handler 1: This runs first.</p>');

    // attach some data to the request object for the next handler
    req.handledBy = 'handler 1';

    next();

}, (req, res) => {

    // second handler continues and ends the response
    res.write(`<p>Handler 2: Received marker = ${req.handledBy}</p>`);
    res.end('<p>Chain complete.</p>');
});


// Export the router object so index.js can access it
module.exports = router;
