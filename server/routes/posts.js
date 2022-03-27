const express = require('express')
const {getPosts,createPosts} = require('../controllers/posts.js')

const router = express.Router()

module.exports = router.get('/getPosts',getPosts )
module.exports = router.post('/createPosts',createPosts )