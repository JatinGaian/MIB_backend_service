const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: { type: String, required: true },
    email: { type: String, required: true },
    commentMessage: { type: String, required: true },
    commentLevel: { type: String, required: true },
    boardId: { type: String },
    sprintId: { type: String },
    boardName: {type: String},
    sprintName:{type: String},
    createdAt: { type: Date, default: Date.now },

});



const Comments = mongoose.model('comment', CommentSchema);

module.exports = Comments;