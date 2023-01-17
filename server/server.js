require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  const results = await db.query("select * from restaurants");
  console.log(results);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"],
    },
  });
});

// Get one restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"],
    },
  });
});

// Create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
  res.status(202).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"],
    },
  });
});

// Update a restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"],
    },
  });
});

// Delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  res.status(204).json({
    status: "success",
  });
});
