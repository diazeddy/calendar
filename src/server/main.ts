import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";

import notesRoutes from "./routes/notesRoutes";
import exportRoutes from "./routes/exportRoutes";

const app = express();

app.use(bodyParser.json())
app.use("/api", notesRoutes);
app.use("/api", exportRoutes);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);