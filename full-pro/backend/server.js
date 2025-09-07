
// backend/index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // JSON body parse karne ke liye

app.post("/register", (req, res) => {
    const userData = req.body;

    // JSON formatted console log
    console.log("User Data Received (JSON):\n", JSON.stringify(userData, null, 2));

    // Response to frontend
    res.json({
        message: "Data received successfully!",
        data: userData
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
