const express = require("express");
const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(express.json());

app.use("/api", healthRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Enterprise Architect API is running 🚀" });
});

module.exports = app;
