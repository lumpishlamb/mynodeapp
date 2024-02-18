import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

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


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

document.getElementById('zoom-out').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};

// in lightsail 

// ls  then cd into htdocs
// g to clear everythin
// git clone <repo-link>
// npm instlal 

// in case of error where port is used. 
// sudo netstat -tulpn | grep :3000
// node server.js -- to test
// f -- to go live
