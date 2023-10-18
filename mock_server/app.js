import express from "express";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/user", (req, res) => {
  res.setHeader("content-type", "application/json");
  res.send({
    id: 1,
    name: `Yuuki`,
    createdAt: new Date("2019-01-01")
  });
});

app.listen(3001);
