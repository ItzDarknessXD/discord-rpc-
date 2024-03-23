const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`NOW GO TO ANY UPTIME APP AND PASTE THIS LINK`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Your Server/Web is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;

