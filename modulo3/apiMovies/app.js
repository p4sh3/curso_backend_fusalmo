import express from "express"
import crypto from "node:crypto"
import cors from "cors"


const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors())

const movies = [];


app.get("/movies", (req, res) => {
  res.json(movies);
})


app.post("/movies", (req, res) => {
  
  const newMovie = {
    id: crypto.randomUUID(),
    ...req.body
  }
  movies.push(newMovie)
  res.status(201).json(newMovie)
})

app.get("/movies/:id", (req, res) => {
  const movie = movies.find(movie => movie.id === req.params.id)

  if (movie){
    res.json(movie)
  } else {
    res.status(404).send("No se encontró la película")
  }
})

app.put("/movies/:id", (req, res) => {
  const movie = movies.find(movie => movie.id === req.params.id)

  if (movie) {

    movie = {
      id: movie.id,
      ...req.body
    }

    res.json(movie)
  
  } else {
    res.status(404).send("No se actualizó la película")
  }
})


app.delete("/movies/:id", (req, res) => {
  const movieIndex = movies.findIndex(movie => movie.id === req.params.id)

  if (movieIndex !== -1) {
    movies.splice(movieIndex, 1)

    res.status(204).send("Película eliminada")

  } else {
    res.status(404).send("No se actualizó la película")
  }
})


app.listen(PORT, () => {
  console.log(`Api en http://localhost:${PORT}`);
})