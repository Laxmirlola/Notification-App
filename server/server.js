const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/notificationdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"));

app.use("/api", notificationRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
