require('dotenv').config()
const express = require('express');

const app = express();

// get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"]
    },
  })
});

// get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  
})

// create a restaurant
app.post("/api/v1/restaurants", (req, res) => {

})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`)
})