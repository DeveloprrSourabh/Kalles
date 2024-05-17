const express = require("express");
const cors = require("cors");
const connectToMongo = require("./config/db");
const productRoute = require("./routes/productRoute");
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

app.use("/api/v1/products", productRoute);

app.listen(8000, () => {
  console.log(`Server is running on Port 8000`);
});
