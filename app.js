const express = require('express');

const app = express();

// Port Number
const port = process.env.PORT || 3000;




// Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
  });