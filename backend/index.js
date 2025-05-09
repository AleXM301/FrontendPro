const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
let currentCount = 2;
const origin ={
        origin: `http://localhost:63342`,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        maxAge: 600,
}
app.use(cors(origin));
app.use(express.json());
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
const todos = new Map([
    [1, {
        id: 1,
        title: "Read a book",
        finished: true
    }],
    [2, {
        id: 2,
        title: "Write a book",
        finished: false
    }]
]);
app.get("/todos", (req, res) => {
    res.json(Array.from(todos.values()));
});

app.get("/todos/:id", (req, res) => {

    const todoId = +req.params.id;
    const todo = todos.get(todoId);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({error: "Not Found" });
    }
});

app.post("/todos", (req, res) => {

    const title = req.body.title;
    if (typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ error: "Invalid title" });
    }
    const newTodo = {
            id: ++currentCount,
            title: title.trim(),
            finished: false,
        }
    todos.set(newTodo.id, newTodo);
    res.status(201).json(newTodo);
});
app.put("/todos/:id", (req, res) => {
    const id = +req.params.id;
    if (!todos.has(id)) {
        return res.status(404).json({error: "Not Found"});
    }
    const { title, finished } = req.body;
    if (typeof title !== 'string' || title.trim() === '' || typeof finished !== 'boolean') {
        return res.status(400).json({ error: "Invalid data" });
    }
    const updatedTodo = { id, title: title.trim(), finished };
    todos.set(id, updatedTodo);
    res.status(200).json(updatedTodo);
});
app.delete("/todos/:id", (req, res) => {
    const todoId = +req.params.id;
    if (isNaN(todoId)) {
        return res.status(400).json({ error: "Invalid ID" });
    }
    if (!todos.has(todoId)) {
        return res.status(404).json({error: "Not Found"});
    }
    todos.delete(todoId);
    res.status(204).send();
});
