const express=require("express");
const path=require("path");
const expressLayouts = require("express-ejs-layouts");

const app=express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(expressLayouts);

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.set("layout", "layout");


app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});