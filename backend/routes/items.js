const express = require("express");
const router = express.Router();
const multer = require("multer");
const Item = require("../models/item");

// Multer config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// POST item
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const item = new Item({
      type: req.body.type,
      title: req.body.title,
      place: req.body.place,
      desc: req.body.desc,
      image: req.file ? `/uploads/${req.file.filename}` : ""
    });

    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/", async (req, res) => {
  const items = await Item.find().sort({ time: -1 });
  res.json(items);
});

module.exports = router;
