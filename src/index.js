const express = require("express");
const app = express();
const PORT = 8081;

app.get("/welcome", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send("Welcome to Dominos!");
});

app.get("/contact", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({
    phone: "18602100000",
    email: "guestcaredominos@jublfood.com",
  });
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
