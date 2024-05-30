import express from "express"
import axios from "axios"

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/users", async (_, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`);
    res.json({
      title: response.data.title,
    });
  } catch (error) {
    console.error(error);
    res.status(404).send("El usuario no ha sido encontrado");
  }
});

app.get("/users/title/:title", async (req, res) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?title=${req.params.title}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(404).send("El título no ha sido encontrado");
  }
});

app.get("/users/limite/:limit", async (req, res) => {
  try {
    const limit = parseInt(req.params.limit, 10);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});