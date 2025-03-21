const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;
let currentCount = 2

app.use(cors());
app.use(express.json());


const todos = [
    {
        id: 1,
        title: "Read a book",
        finished: true
    },
    {
        id: 2,
        title: "Write a book",
        finished: false
    }
]


app.get("/todos", (req, res) => {
    console.log(`Object  "ToDos"`,todos)
    res.json(todos)
});


app.get("/todos/:id", (req, res) => {
    const todoId = +req.params.id;
    const todo = todos.find(todo => todo.id === todoId)
    if (todo) {
        res.json(todos)
    } else {
        return res.status(400).json({error: "Not Found"})
    }
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.post("/todos", (req, res) => {
console.log(req.body)
console.log(todos)

    const title = req.body.title;
    if (!title) {
        return  res.status(400).json({error: "title not found"})
    }
    const newTodo =
        {
            id: ++currentCount,
            title,
            finished: false
        }

    todos.push(newTodo)
    res.status(201).json(newTodo)

})


app.put("/todos/:id", (req, res) => {
    const id = +req.params.id;
    const finished = req.body.finished;


    console.log('id:',id)
    console.log('finished:',finished);
    console.log('req body',req.body)
    console.log('todos',todos)
    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1){
        return  res.status(404).json({error: "Not Found"});
    }

    let todo = todos[todoIndex];

    todo.finished = finished;
    res.status(200).json(todos[todoIndex]);

})
app.delete("/todos/:id", (req, res) => {
    const todoId = +req.params.id;

    const todoIndex = todos.findIndex(todo => todo.id === todoId)

    if (todoIndex === -1){
       return  res.status(404).json({error: "Not Found"})
    }
    todos.splice(todoIndex, 1)
    res.status(204).send()
});
