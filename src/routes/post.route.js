const route = require('express').Router()
const { createPost, deletePost, updatePost, getAllPosts, getOnePost } = require('../controllers/post.controller.js')

//create post
route.post('/create', createPost)
//delete post
route.delete('/:id', deletePost)
//update post
route.put('/:id', updatePost)
//get one post
route.get('/:id', getOnePost)
//get all post 
route.get('/', getAllPosts)

module.exports = route