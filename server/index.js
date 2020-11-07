const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
const bodyParser = require("body-parser");
const db = mongoose.connection;
const cors = require("cors");
// const pool = require("./db");
app.use(cors()); //implements the cors package middleware
app.use(express.json()); //You have to use this to get the body through your requests, otherwise it won't be available
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

let db_status = "MongoDB connection not successful.";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => (db_status = "Successfully opened connection to Mongo!"));

const postSchema = new mongoose.Schema({
  title: String,
  body: String
});

const productSchema = new mongoose.Schema({
  manufacturer: String,
  productName: String,
  modelNo: String,
  dateOfPurchase: Date,
  expiryDate: Date,
  photo: String
});

const Post = mongoose.model("Post", postSchema);
const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
  res.send(db_status);
});

app.post("/posts", (req, res) => {
  const newPost = new Post(req.body);
  newPost.save((err, post) => {
    return err ? res.sendStatus(500).json(err) : res.json(post);
  });
});

// Code for adding new product to warranty catalog
app.put("/products", (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save((err, product) => {
    return err ? res.sendStatus(500).json(err) : res.json(product);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// app.route("/api/getPosts").get((req, res) => {
//   pool.query("SELECT * FROM posts", (err, posts) => {
//     if (err) {
//       console.log(err);
//       //send the SQL error if something goes wrong
//       res.status(500).json({ err });
//     } else {
//       res.status(200).send({ posts: posts.rows });
//     }
//   });
// });
// app.listen(8675, () => console.log("Listening on port 8675")); //starts the server so you can hit your API's

//const morgan = require("morgan");

//const posts = require("./routers/posts");
//const authors = require("./routers/authors");

//app.listen(4040, () => console.log("Listening on port 4040"));

// app
//   .route("/")
//   .get((request, response) => {
//     response.json({ message: "HELLO WORLD" });
//   })
//   .post((request, response) => {
//     response.json(request.body);
//   });
// const logging = (request, response, next) => {
//   console.log(`${request.method} ${request.url} ${Date.now()}`);
//   next();
// };

// app
//   .use(bodyParser.json())
//   .use(morgan("dev"))
//   .use("posts", posts)
//   .use("/authors", authors);
