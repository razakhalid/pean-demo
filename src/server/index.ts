import express from "express";
import {api} from "./api";

const PORT = 3002;
const app = express();

app.use(api);
app.use(express.static(process.cwd() + "/dist/pean-demo/browser"));

app.listen(process.env["PORT"], () => console.log(`Listening on port ${PORT}`));
