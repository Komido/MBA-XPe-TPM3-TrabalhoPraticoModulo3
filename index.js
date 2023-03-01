import express from "express";

import animaisRouter from "./src/routes/animal.route.js";
import proprietariosRouter from "./src/routes/proprietario.route.js";

const app = express();

app.use(express.json());

app.use("/animal", animaisRouter);
app.use("/proprietario", proprietariosRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err.message });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
