const express = require("express");
const cors = require("cors");
const connectToMongo = require("./config/db");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const tagRoute = require("./routes/tagRoute");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(cors());
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

// User Route
app.use("/api/v1/auth/", userRoute);

app.listen(8000, () => {
  console.log(`Server is running on Port 8000`);
});
