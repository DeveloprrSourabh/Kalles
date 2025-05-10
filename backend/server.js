const express = require("express");
const cors = require("cors");
const connectToMongo = require("./config/db");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const colorRoute = require("./routes/colorRoute");
const cartRoute = require("./routes/cartRoute");
const tagRoute = require("./routes/tagRoute");
const blogRoute = require("./routes/blogRoute");
const blogCategoryRoute = require("./routes/blogCategoryRoute");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
connectToMongo();

// Product Route
app.use("/api/v1/product", productRoute);

// Category Route
app.use("/api/v1/category", categoryRoute);

// Tag Route
app.use("/api/v1/tag", tagRoute);

// Color Route
app.use("/api/v1/color", colorRoute);

// User Route
app.use("/api/v1/auth/", userRoute);

// Cart Route
app.use("/api/v1/product", cartRoute);

// Blog Category Route
app.use("/api/v1/category", blogCategoryRoute);

// Blog Route
app.use("/api/v1/blog", blogRoute);

// static files
app.use(express.static(path.join(__dirname, "../build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(8000, () => {
  console.log(`Server is running on Port 8000`);
});
