/**
 * server.js
 * demonstration of simple, custom web server using Express.js
 * River Breazile 
 * CS 233W - Week 1 Activity
 * Oct. 1st 2025
 */

// import desired frameworks
    const express = require('express');
    const app = express();
//set listening port value
    const PORT = 3000;

//configure the routing
    app.get('/', (request, response) => {
        response.send('<h1>The Tasty Tortellini</h1><h2>Southwest PDX\'s favorite Italian bistro</h2>');
    })

    app.get('/menus', (request, response) => {
        response.send('<h1>Menus</h1><ul><li>Lunch</li><li>Dinner</li><li>Drinks</li><li>Desserts</li></ul>');
    })

//connect server to desired port

    app.listen(PORT, () => {
        console.log("Web server currently listening on port:" + PORT);
    })