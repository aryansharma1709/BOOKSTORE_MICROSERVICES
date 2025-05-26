const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const orderRoutes = require("./routes/orderRoutes");
const setupSwagger = require("./swagger");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected (Order Service)"))
  .catch((err) => console.log(err));

app.use("/api/orders", orderRoutes);
setupSwagger(app);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
