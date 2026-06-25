const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // IMPORTANT

// Contact API
app.post("/api/contact", (req, res) => {
    console.log("Contact Data:", req.body);

    res.json({
        success: true,
        message: "Message received"
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});