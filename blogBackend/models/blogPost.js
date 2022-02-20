const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    post_title: {
        type: String,
        require: true
    },
    post_author: {
        type: String,
        require: true
    },
    post_shortDescription: {
        type: String,
        require: true
    },
    post_image: {
        type: String,
        require: true
    },
    post_body: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('blogPost', blogSchema)