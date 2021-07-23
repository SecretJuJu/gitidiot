import app from "./app.js";
import env from "./config/env.js";

const PORT = env.port || 8989;

app.listen(PORT, () => {
  console.log("server is running at " + PORT);
});
