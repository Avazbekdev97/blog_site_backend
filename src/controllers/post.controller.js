const Post = require('../models/post.js')

// create post 
exports.createPost = async (req, res) => {
    try {
        const savePost = await new Post(req.body)
        const savedPost = await savePost.save()
        res.status(200).json(savedPost)
    } catch(error) {
        res.status(400).json(error)
    }
}

// updatePost
exports.updatePost = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id)
        
        if(post.userId === req.body.userId) {
            await Post.updateOne({ $set: req.body })
            res.status(200).json('it has been updated')
        } else {
            res.status(403).json('you can only update your post')
        }

    } catch(error) {
        res.status(500).json(error)
    }
}


// delete post
exports.deletePost = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id)
        if (post.userId === req.body.userId) {
            await Post.deleteOne()
            res.status(200).json('the post is deleted')
        }

    } catch(error) {
        res.status(500).json(error)
    }
}

// get all post 
exports.getAllPosts = async (req, res) => {
    try {

        const posts = await Post.find()
        res.status(200).json(posts)

    } catch(error) {
        res.status(500).json(error)
    }
}

// get one post 
exports.getOnePost = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id)
        res.status(200).json(post)

    } catch(error) {
        res.status(500).json(error)
    }
}