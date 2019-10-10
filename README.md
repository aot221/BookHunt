Consumes google books api to deliver a seemsless book searching experience.

Directions to install and run:

1. Unzip contents into empty directory.
2. "npm i" to install dependencies.
3. "npm start" to run application on localhost port 3000.

Directions for unit tests:

1. Start application with "npm start"
2. Run unit tests with "npm test"

This application displays a clean, simple frontend design to provide a user interface for searching book titles via the google books api. 
Ajax is used to make get request to the google books api based on user input. 
Jquery then retrieves the response from the ajax call and creates a formatted table containing the search results. 
Node.js is used as a web server.