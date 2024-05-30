import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'


[
  {
    "id": 1,
    "titulo": "Batman: El Caballero de la Noche",
    "protagonista": "Bruce Wayne / Batman",
    "caracteristicas": "Un multimillonario que lucha contra el crimen...",
    "urlPelicula": "https://www.filmaffinity.com/es/film867354.html",
    "urlImagen": "https://www.example.com/batman.jpg"
  },
  {
    "id": 2,
    "titulo": "Inception",
    "protagonista": "Dom Cobb",
    "caracteristicas": "Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos...",
    "urlPelicula": "https://www.filmaffinity.com/es/film123456.html",
    "urlImagen": "https://pics.filmaffinity.com/inception-652954101-large.jpg"
  },
  {
    "id": 3,
    "titulo": "The Matrix",
    "protagonista": "Neo",
    "caracteristicas": "Un hacker que descubre que su realidad es una simulación creada por inteligencias artificiales...",
    "urlPelicula": "https://www.filmaffinity.com/es/film234567.html",
    "urlImagen": "https://pics.filmaffinity.com/the_matrix-155050517-large.jpg"
  },
  {
    "id": 4,
    "titulo": "The Shawshank Redemption",
    "protagonista": "Andy Dufresne",
    "caracteristicas": "Un banquero acusado de asesinato encuentra esperanza y redención dentro de la prisión...",
    "urlPelicula": "https://www.filmaffinity.com/es/film345678.html",
    "urlImagen": "https://pics.filmaffinity.com/the_shawshank_redemption-576140557-large.jpg"
  },
  {
    "id": 5,
    "titulo": "Pulp Fiction",
    "protagonista": "Vincent Vega",
    "caracteristicas": "Varias historias de crimen se entrelazan en Los Ángeles...",
    "urlPelicula": "https://www.filmaffinity.com/es/film456789.html",
    "urlImagen": "https://pics.filmaffinity.com/pulp_fiction-210382116-large.jpg"
  },
  {
    "id": 6,
    "titulo": "The Godfather",
    "protagonista": "Michael Corleone",
    "caracteristicas": "El patriarca de una familia mafiosa pasa el control de su imperio a su hijo...",
    "urlPelicula": "https://www.filmaffinity.com/es/film567890.html",
    "urlImagen": "https://pics.filmaffinity.com/the_godfather-488102675-large.jpg"
  },
  {
    "id": 7,
    "titulo": "Fight Club",
    "protagonista": "The Narrator",
    "caracteristicas": "Un hombre aburrido de su vida forma un club de lucha secreto...",
    "urlPelicula": "https://www.filmaffinity.com/es/film678901.html",
    "urlImagen": "https://pics.filmaffinity.com/fight_club-320750671-large.jpg"
  },
  {
    "id": 8,
    "titulo": "Forrest Gump",
    "protagonista": "Forrest Gump",
    "caracteristicas": "Un hombre con un bajo coeficiente intelectual ha tenido experiencias extraordinarias a lo largo de su vida...",
    "urlPelicula": "https://www.filmaffinity.com/es/film789012.html",
    "urlImagen": "https://pics.filmaffinity.com/forrest_gump-212765827-large.jpg"
  },
  {
    "id": 9,
    "titulo": "Interstellar",
    "protagonista": "Cooper",
    "caracteristicas": "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar la supervivencia de la humanidad...",
    "urlPelicula": "https://www.filmaffinity.com/es/film890123.html",
    "urlImagen": "https://pics.filmaffinity.com/interstellar-366875261-large.jpg"
  },
  {
    "id": 10,
    "titulo": "The Lord of the Rings: The Return of the King",
    "protagonista": "Frodo Baggins",
    "caracteristicas": "Un hobbit y sus amigos continúan su misión para destruir un anillo poderoso...",
    "urlPelicula": "https://www.filmaffinity.com/es/film901234.html",
    "urlImagen": "https://pics.filmaffinity.com/the_lord_of_the_rings_the_return_of_the_king-178294596-large.jpg"
  }
]


function App() {
  const [movies, setMovies] = useState([])
  // const [newMovie, setNewMovie] = useState({})
  const [newTitle, setNewTitle] = useState("")
  const [newActor, setNewActor] = useState("")
  const [newCategory, setNewCategory] = useState("")
  const [newUrl, setNewUrl] = useState("")
  // const newMovie = {
  //   title: "",
  //   actor: "",
  //   category: "",
  //   url: ""
  // }
  const baseURL = "http://localhost:4000/movies"
  useEffect(() => {
    fetchMovie()
  }, [])

  const fetchMovie = async () => {
    try {
      const response = await axios.get(baseURL)
      setMovies(response.data)
    } catch (error) {
      console.error('Errpr al recuperar las movies', error)
    }
  }

  const createMovie = async () => {
    try {
      const response = await axios.post(baseURL, {
        title: newTitle,
        actor: newActor,
        category: newCategory,
        url: newUrl
      })
      setMovies([...movies, response.data])
    } catch (error) {
      console.error('Error al crear la movie', error)
    }
  }

  const updateMovie = async (id, newData) => {
    try {
      const response = await axios.put(`${baseURL}/${id}`, newData)
      setMovies(movies.map(movie => (movie.id === id ? response.data : movie)))
    } catch (error) {
      console.error('Error al modificar la movie', error)
    } 
  }


  const deleteMovie = async (id) => {
    try {
      const response = await axios.delete(`${baseURL}/${id}`)
      setMovies(movies.filter(movie => movie.id !== id))
    } catch (error) {
      console.error('Error al eliminar la movie', error)
    }
  }

  return (
    <>
      <div>
        <h1>Administrador de movies</h1>
        <input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder='Título'/>
        <input type='text' value={newActor} onChange={(e) => setNewActor(e.target.value)} placeholder='Actor' />
        <input type='text' value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder='Categoría' />
        <input type='text' value={newUrl} onChange={(e) => setNewUrl(e.target.value)}  placeholder='Url video' />
        <button onClick={createMovie}>Agregar Movie</button>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <input type="text" value={movie.title} onChange={(e) => updateMovie(movie.id, { title: e.target.value })} />
              <button onClick={() => deleteMovie(movie.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
