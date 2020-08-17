require('dotenv').config()
const express = require('express');
const db = require("./db");
const morgan = require("morgan");
const app = express();

app.use(express.json());

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");
    console.log(results)
    res.status(200).json({
    status: "success",
    results: results.rows.length,
    data: {
      restaurants: results.rows
    },
  })
  } catch (err) {
    console.log(err)
  }
});

// get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants where id = $1", [req.params.id]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      }
    })
  } catch (err) {
    console.log(err)
  }
});

// create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
  res.json(201).json({
    status: "success"
  })
});

// update restaurants
app.put("/api/v1/restaurants/:id", (req, res) => {
  res.json(200).json({
    status: "success"
  })
})

app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "delete success"
  })
})



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`)
})