const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    service: "nexus-api",
    version: "1.0.0",
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.get("/api/v1/info", (req, res) => {
  res.json({
    service: "nexus-api",
    environment: process.env.NODE_ENV || "development",
    version: "1.0.0"
  });
});

module.exports = app;