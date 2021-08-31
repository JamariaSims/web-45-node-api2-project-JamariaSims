// require your server and launch it here
const server = require("./api/server");
const port = 6000;
server.listen(port, () => {
  console.log("Running on 6000....");
});
