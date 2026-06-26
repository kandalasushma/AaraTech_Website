const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("AaraTech Backend Running");
});

// Contact API (NO MongoDB)
app.post("/api/contact", (req, res) => {
  console.log("Contact Data Received:", req.body);

  res.json({
    success: true,
    message: "Message received successfully"
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});