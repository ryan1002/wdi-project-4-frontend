const express = require('express');
const app     = express();
const path    = require("path");
const port    = process.env.PORT || 8000;

app.use(express.static(`${__dirname}/public`));

app.get('/*', (req,res) => {
  return res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () =>{
  console.log("Server has started on port " + port);
});
