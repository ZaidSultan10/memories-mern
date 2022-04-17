const mongoose = require('mongoose')
const PostMessage = require('../models/postMessage.js')
const { post } = require('../routes/posts.js')

const getPosts = async (req,res) => {
    try{
        const postMessages = await PostMessage.find()
        
        res.status(200).json(postMessages)
    }catch(err){
        console.log('err>>>',err)
        res.status(400).json({message:error.message})
    }
}

const createPosts = async (req,res) => {
    const post = req.body
    const newPost = new PostMessage(post)
    try{
        await newPost.save()
        res.status(200).json(newPost)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

const updatePost = async (req,res) => {
    const {id: _id} = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid){
       return res.status(404).send('No Such ID Exists')
    }
    const updatePost = await PostMessage.findByIdAndUpdate(_id, {...post,_id}, {new:true})
    res.json(updatePost)
}

const deletePost = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid){
       return res.status(404).send('No Such ID Exists')
    }
    await PostMessage.findByIdAndRemove(id)
    return res.json({ message: "Post deleted successfully." })
}

module.exports = {
    getPosts,
    createPosts,
    updatePost,
    deletePost
}