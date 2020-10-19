const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const posts = require("./routers/posts");
const authors = require("./routers/authors");
const cors = require("cors");
app.listen(4040, () => console.log("Listening on port 4040"));

app
  .route("/")
  .get((request, response) => {
    response.json({ message: "HELLO WORLD" });
  })
  .post((request, response) => {
    response.json(request.body);
  });

// const logging = (request, response, next) => {
//   console.log(`${request.method} ${request.url} ${Date.now()}`);
//   next();
// };

app
  .use(bodyParser.json())
  .use(morgan("dev"))
  .use("posts", posts)
  .use("/authors", authors
