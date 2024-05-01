import express from "express";
import {api} from "./api";

const PORT = 3002;
const app = express();

app.use(api);

app.get("/api/hi", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
