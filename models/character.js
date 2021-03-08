const {Schema, model}= require('mongoose');
const mongoosePag =require('mongoose-paginate-v2');
const characterSchema = Schema({
    name:{
        type : String,
        required : true
    },
    status:{
        type : String,
        required : true
    },
    species:{
        type : String,
        required : true
    },
    type:{
        type : String,
        required : true
    },
    gender:{
        type : String,
        required : true
    },
    origin:{
        name: {
            type : String,
            required : true
        },
        url: {
            type : String,
            required : true
        }
    },
    location:{
        name:{
            type : String,
            required : true
        },
        url:{
            type : String,
            required : true
        }
    },
    image:{
        type : String,
        required : true
    },
    episode:[
        type = String,
        required = true
    ],
    url:{
        type : String,
        required : true
    },
    created:{
        type : String,
        required : true
    }
},{ collection : 'character' });
characterSchema.plugin(mongoosePag);
module.exports = model('character', characterSchema)