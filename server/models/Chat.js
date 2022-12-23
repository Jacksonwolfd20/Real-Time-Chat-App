const { Schema, model } = require('mongoose');

const chatSchema = new Schema(
    {
        chatName: {
            type: String,
            trim: true,
            required: true,
            maxLength: 500,
        },
        isGroupChat: {
            type:Boolean, 
            default: false
        },
        users: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        latestMessage: [
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message"
        }
    ],
        groupAdmin: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
        
        
    });

const Chat = model('Chat', chatSchema);

module.exports = Chat;