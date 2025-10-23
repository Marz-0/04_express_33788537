// Set up express
const express = require("express"); // imports the express module
const app = express(); // creates an express application instance
const port = 8000; // sets the port number to 8000

// Load routes from the main.js file

const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);




// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); //starts the server and listens on the specified port 
    // It also logs a message to the console when the server is running


