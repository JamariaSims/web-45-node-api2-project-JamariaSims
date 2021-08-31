// implement your server here
// require your posts router and connect it here
const express = require("express");
const server = express();
server.use(express.json());
const PostRouter = require("./posts/posts-router");
server.use("/api/posts", PostRouter);
server.get("/", (req, res) => {
  res.send(`
    <h1>Homework!</h1>
  `);
});
module.exports = server;
