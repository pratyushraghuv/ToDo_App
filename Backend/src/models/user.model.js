const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false
    },
    todos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Todos'
        }
    ]
}, { timestamps: true })

userSchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password, 10);
})

module.exports = mongoose.model('User', userSchema)