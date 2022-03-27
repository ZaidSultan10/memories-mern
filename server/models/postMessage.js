const mongoose = require('mongoose')
const moment = require('moment')

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: moment().format('YYYY-MMM-DD HH:mm:ss')
    }
})

const PostMessage = mongoose.model('PostMessage',postSchema)

module.exports = PostMessage