const express = require('express')
const {getPosts,createPosts, updatePost,deletePost} = require('../controllers/posts.js')

const router = express.Router()

module.exports = router.get('/getPosts',getPosts )
module.exports = router.post('/createPosts',createPosts )
module.exports = router.patch('/:id', updatePost)
module.exports = router.delete('/:id', deletePost)