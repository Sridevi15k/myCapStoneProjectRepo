require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_DB_URL);
const bodyParser = require("body-parser");
const db = mongoose.connection;
const cors = require("cors");

// const pool = require("./db");
app.use(cors()); //implements the cors package middleware
app.use(express.json()); //You have to use this to get the body through your requests, otherwise it won't be available
app.use(bodyParser.json());

let userMap = new Map();
const fb = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
//initialize admin SDK using serciceAcountKey
fb.initializeApp({
  credential: fb.credential.cert(serviceAccount)
});
const fs = fb.firestore();
fs.collection("users")
  .get()
  .then(snapshot =>
    snapshot.forEach(doc => {
      userMap.set(doc.id, {
        firstName: doc.data().firstName,
        email: doc.data().email
      });
    })
  );

const port = process.env.PORT || 3000;

let db_status = "MongoDB connection not successful.";
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => (db_status = "Successfully opened connection to Mongo!"));

const productSchema = new mongoose.Schema({
  uid: String,
  manufacturer: String,
  productName: String,
  modelNo: String,
  dateOfPurchase: Date,
  expiryDate: Date,
  reminderSent: { type: Boolean, default: false },
  photo: String,
  createDateTime: { type: Date, default: Date.now() }
});

const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
  res.send(db_status);
});

// Code for adding new product to warranty catalog
app.post("/products", (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save((err, product) => {
    return err ? res.sendStatus(500).json(err) : res.json(product);
  });
});

// Code for adding new product to warranty catalog
app.get("/products/:uid", (req, res) => {
  var query = Product.find({ uid: req.params.uid });
  query.exec(function(err, products) {
    return err ? res.sendStatus(500).json(err) : res.json(products);
  });
});

var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.REMINDER_EMAIL_UID,
    pass: process.env.REMINDER_EMAIL_PWD
  }
});

function sendMail(product) {
  let user = userMap.get(product.uid);

  let mailOptions = {
    from: process.env.REMINDER_EMAIL_FROM,
    to: user.email,
    subject: `Warranty Expiry Reminder: ${product.productName}`,
    text: `
Hi ${user.firstName},

This is to notify you that warranty for below product is about to expire.

Manufacturer: ${product.manufacturer}
Name: ${product.productName}
Mode No: ${product.modelNo}
Date of Purchase: ${product.dateOfPurchase}
Warranty expiry Date: ${product.expiryDate}

Thanks,
Warranty Reminder Team.`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log("Email failed: ", error);
    } else {
      console.log(`Email sent to ${user.email}. Response: `, info.response);
      var myQuery = { _id: product._id };
      var newValues = { $set: { reminderSent: true } };

      Product.updateOne(myQuery, newValues, function(err) {
        if (err) throw err;
      });
    }
  });
}

let cron = require("node-cron");

cron.schedule("* * * * *", () => {
  console.log("Running Email task every minute");
  // checkAndSendMail();
  let currDate = new Date();
  let endDate = new Date();
  endDate.setDate(endDate.getDate() + 14);

  let query = Product.find({
    reminderSent: false,
    expiryDate: { $gte: currDate, $lte: endDate }
  });

  query.exec(function(err, products) {
    if (err) {
      console.log("Error");
    }
    products.forEach(product => {
      console.log("Product:", product);
      sendMail(product);
    });
  });
});

app.listen(port, () => console.log(`App listening on port  ${port}!`));
