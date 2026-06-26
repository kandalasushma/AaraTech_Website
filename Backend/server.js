const express = require("express");
const cors = require("cors");
<<<<<<< HEAD
=======
const { MongoClient } = require("mongodb");
>>>>>>> 5c22e46 (Intial commit)

const app = express();

app.use(cors());
<<<<<<< HEAD
app.use(express.json()); // IMPORTANT

// Contact API
app.post("/api/contact", (req, res) => {
    console.log("Contact Data:", req.body);

    res.json({
        success: true,
        message: "Message received"
    });
=======
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
>>>>>>> 5c22e46 (Intial commit)
});

const PORT = 5000;

app.listen(PORT, () => {
<<<<<<< HEAD
    console.log(`Server running on port ${PORT}`);
=======
  console.log(`Server running on port ${PORT}`);
>>>>>>> 5c22e46 (Intial commit)
});