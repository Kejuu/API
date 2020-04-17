const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API Bookmarks");
});
const rutas_bookmarks = require("./routes/bookmarks");
app.use(rutas_bookmarks);
const port = 3000;
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});