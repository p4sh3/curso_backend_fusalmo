import express from "express"

const app = express();
const PORT = 3000;

app.use(express.json());


const tasks = [];


app.get("/movies", (req, res) => {
  res.json(tasks);
})


app.post("/movies", (req, res) => {
  const newTask = {
    id: tasks.length+1,
    title: req.body.title,
    completed: false
  }
  
  tasks.push(newTask)
  res.status(201).json(newTask)
})

app.get("/movies/:id", (req, res) => {
  const taskId = parseInt(req.params.id)
  const task = tasks.find(task => task.id === taskId)

  if (task){
    res.json(task)
  } else {
    res.status(404).send("No se encontró la tarea")
  }
})

app.put("/movies/:id", (req, res) => {
  const taskId = parseInt(req.params.id)
  const task = tasks.find(task => task.id === taskId)

  if (task) {
    task.title = req.body.title || task.title,
    task.completed = req.body.completed ?? task.completed

    res.json(task)
  
  } else {
    res.status(404).send("No se actualizó la tarea")
  }
})

app.patch("/movies/:id", (req, res) => {
  const taskId = parseInt(req.params.id)
  const task = tasks.find(task => task.id === taskId)

  if (task) {
    task.title = req.body.title ?? task.title,
    task.completed = req.body.completed ?? task.completed

    res.json(task)

  } else {
    res.status(404).send("No se actualizó la tarea")
  }
})

app.delete("/movies/:id", (req, res) => {
  const taskId = parseInt(req.params.id)
  const taskIndex = tasks.findIndex(task => task.id === taskId)

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1)

    res.status(204).send("Tarea eliminada")

  } else {
    res.status(404).send("No se actualizó la tarea")
  }
})


app.listen(PORT, () => {
  console.log(`Api en http://localhost:${PORT}`);
})