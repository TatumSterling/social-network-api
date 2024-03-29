
const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1 
        },
        createAt:  {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [ //NESTED DOCUMENT
            {
            type: Schema.Types.ObjectId,
            ref: 'reaction'
            }
        ]
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
