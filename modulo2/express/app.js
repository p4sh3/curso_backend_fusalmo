import express from "express"

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Este es un servidor usando express")
})

app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:${PORT}`);
})