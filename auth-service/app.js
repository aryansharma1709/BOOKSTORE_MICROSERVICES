const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const setupSwagger = require("./swagger");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected (Auth Service)"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
