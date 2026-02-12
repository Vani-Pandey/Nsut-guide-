const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Serve frontend folder
app.use(express.static(path.join(__dirname, "frontend")));

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/lostfound")
  .then(() => console.log("MongoDB connected locally"))
  .catch(err => console.log(err));

// API route
app.use("/api/items", require("./routes/items"));

// Pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "home.html"));
});

app.get("/lostfound", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "lostfound.html"));
});
app.get("/lostfound2", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "lostfound2.html"));
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
