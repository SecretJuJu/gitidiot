import express from "express";
import path from "path";
import env from "./config/env.js";

const app = express(),
  flag = env.flag || "Skills{thisisgitidiotflag}",
  __dirname = path.resolve();

app.get("/", (req, res) => {
  res.send(`
        the flag is "+env.flag+" <br>
        /source <- you can see this code!!
    `);
});

app.get("/source", (req, res) => {
  res.sendFile(path.join(__dirname, "app.js"));
});

export default app;

// made by dev.tmdqh@gmail.com
// I am a github beginner
