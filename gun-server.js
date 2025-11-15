// ------------------------------
// Simple Dedicated GUN Peer
// ------------------------------

const Gun = require('gun');
require('gun/sea');  
require('gun/lib/auth');  
const express = require('express');
const app = express();

// CORS so Netlify frontend can connect
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // allow all for now
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.send("Gun peer running OK");
});

// Gun config
const gun = Gun({
  file: false,
  web: app.listen(process.env.PORT || 8765, () => {
    console.log("🚀 GUN peer running on port " + (process.env.PORT || 8765));
  })
});
