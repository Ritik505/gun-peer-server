const Gun = require('gun');
require('gun/sea');
require('gun/lib/radix');
require('gun/lib/radisk');
require('gun/lib/store');
require('gun/lib/rindexed');

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log("Gun server running on port " + port);
});

Gun({ web: server });
