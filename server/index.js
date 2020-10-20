const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const posts = require("./routers/posts");
const authors = require("./routers/authors");
const cors = require("cors");
const pool = require("./db");
app.use(cors()); //implements the cors package middleware
app.use(express.json()); //You have to use this to get the body through your requests, otherwise it won't be available
app.listen(4040, () => console.log("Listening on port 4040"));

// app
//   .route("/")
//   .get((request, response) => {
//     response.json({ message: "HELLO WORLD" });
//   })
//   .post((request, response) => {
//     response.json(request.body);
//   });

app.route("/demoForSridevi").get((req, res) => {
  pool.query("SELECT * FROM accounts", (err, users) => {
    if (err) {
      console.log(err);
      //send the SQL error if something goes wrong
      res.status(500).json({ err });
    } else {
      res.status(200).send({ peeps: users.rows });
    }
  });
});
app.listen(8675, () => console.log("Listening on port 8675")); //starts the server so you can hit your API's

// const logging = (request, response, next) => {
//   console.log(`${request.method} ${request.url} ${Date.now()}`);
//   next();
// };

app
  .use(bodyParser.json())
  .use(morgan("dev"))
  .use("posts", posts)
  .use("/authors", authors);
