const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/page1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views', 'page1.html'));
});

app.get('/strava_test', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views', 'strava_test.html'));
});

app.get('/product_search', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views', 'product_search].html'));
});

app.get('/product_1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views', 'product_1].html'));
});

app.get('/product_2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views', 'product_2].html'));
});


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




// in lightsail 

// ls  then cd into htdocs
// g to clear everythin
// git clone <repo-link>
// npm instlal 

// in case of error where port is used. 
// sudo netstat -tulpn | grep :3000
// node server.js -- to test
// f -- to go live
