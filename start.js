const server = require('./server/index');
let port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`go to localhost:${port}`)
});