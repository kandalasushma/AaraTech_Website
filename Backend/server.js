const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://kandalasushma17_db_user:123node@cluster0.hpoorzg.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error:", error);
  }
}

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to AaraTech Backend");
});

app.post("/contact", async (req, res) => {
  try {
    console.log("Received Data:", req.body);

    const db = client.db("AaraTech");
    const collection = db.collection("contacts");

    const result = await collection.insertOne(req.body);

    console.log("Saved:", result);

    res.json({
      success: true,
      message: "Contact saved successfully",
    });
  } catch (err) {
    console.log("ERROR:", err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});