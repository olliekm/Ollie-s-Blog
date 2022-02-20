const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');
const cors = require('cors')
const blogPost = require('./models/blogPost.js')

app.use(cors())

const conn2 = mongoose.connect('mongodb+srv://ollieadmin:ollie123@cluster0.y0pmv.mongodb.net/blog?retryWrites=true&w=majority', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.on('open', () => console.log("Connected"))

app.get('/', async (req, res) => {
    const posts = await blogPost.find()
    res.send(posts)
})

app.get('/create', async (req, res) => {
    const post = new blogPost({
        post_title: "The new BAD GOOD new new Best Post!",
        post_author: "Oliver Kwun-Morfitt",
        post_shortDescription: "The best post, just click and check this out!",
        post_image: "this is an aimage",
        post_body: 'This is some cool text!!! <br /> I want to learn if this is cool! <br /> <h1 style="font-size: 24px; color: #33A5FF;">THIS IS BIG TEXT and blue</h1>'
    })
    const completePost = await post.save()
    res.send(post)
})

app.get('/post/:postTitle', async (req, res) => {
    const post = await blogPost.find({post_title: req.params.postTitle})
    res.send(post)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})