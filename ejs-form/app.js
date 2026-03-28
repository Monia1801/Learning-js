const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware (VERY IMPORTANT)
app.use(express.urlencoded({ extended: true }));

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home route (optional)
app.get("/", (req, res) => {
  res.send("Home Page");
});

// GET → show form
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Form" });
});

// POST → process form
app.post("/contact", (req, res) => {
  console.log("Form Data:", req.body);

  res.render("contact-success", {
    title: "Message Sent",
    formData: req.body
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});