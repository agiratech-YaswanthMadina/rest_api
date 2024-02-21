const { default: mongoose } = require('mongoose')
const mangoose = require('mongoose')

const schema =  new mangoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    subscriberToChannel:{
        type: String,
        required: true
    }, 
    subscribeDate:{
        type:Date, 
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', schema)