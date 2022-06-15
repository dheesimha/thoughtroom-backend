const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}


let blogs = [

    {
        "content": "heyooo",
        "date": "2022-06-15T04:13:51.624Z",
        "important": false,
        "id": 1
    },
    {
        "content": "submit 1\\",
        "date": "2022-06-15T04:13:57.210Z",
        "important": true,
        "id": 2
    },
    {
        "content": "note 20000",
        "date": "2022-06-15T04:14:01.858Z",
        "important": true,
        "id": 3
    }

]


app.get("/", (req, res) => {
    res.send('Hello')
})

app.get("/api/blogs", (req, res) => {
    res.json(blogs)
})


app.get("/api/blogs/:id", (req, res) => {
    const id = req.params.id

    const blog = blogs.find((blog) => JSON.stringify(blog.id) === id)

    if (blog) {

        res.send(blog)
    }

    else {
        res.status(404).end()
    }
})

const generateId = () => {
    const maxId = blogs.length > 0
        ? Math.max(...blogs.map(n => n.id))
        : 0
    return maxId + 1
}

app.post("/api/blogs", (req, res) => {
    let body = req.body

    if (!body.content) {
        res.status(400).json({
            error: 'content missing'
        })
    }


    let postBlog = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId()
    }

    blogs = blogs.concat(postBlog)

    res.json(postBlog)


})


app.put("/api/blogs/:id", (req, res) => {
    let id = req.params.id
    let body = req.body

    let updateBlog = blogs.find(blog => JSON.stringify(blog.id) === id)

    let finalUpdateBlog = { ...updateBlog, content: body.content, important: body.important || false }

    blogs = blogs.map((blog) => JSON.stringify(blog.id) !== id ? blog : finalUpdateBlog)

    res.status(200).json(finalUpdateBlog)
})

app.delete("/api/blogs/:id", (req, res) => {
    let id = req.params.id

    blogs = blogs.filter(blog => JSON.stringify(blog.id) !== id)

    res.status(204).end()
})


app.use(unknownEndpoint)



app.listen(3002 || process.env.PORT, () => {
    console.log('Server started ');
})
