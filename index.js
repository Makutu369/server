const express = require("express");

const data = {
  name: "kwame",
  age: 32,
};
const app = express();
const PORT = process.env.PORT | 3000;
app.get("/", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`server listening on https://localhost:${PORT}`);
});
