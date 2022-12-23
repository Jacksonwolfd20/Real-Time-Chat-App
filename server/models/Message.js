const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
        maxLength: 500,
    },
    createdAt: {
        timestamps: true,
        type: Date,
        default: Date.now,
    },
    userId: [{
        type: Schema.Types.ObjectId, ref:"User",
        required: true
    }],
    lastAccessed: { type: Date, default: Date.now }
});

const Message = model('Message', messageSchema);

module.exports = Message