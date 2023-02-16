const mongoose = require ('mongoose');


const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;


const hotelSchema= new Schema({
    name:{
         type:String,
         required:true
         },
    noRooms:{
        type:Number,
        required:true
    },
    lounge:{
        type:Boolean,
        required:true
    },
    restaurant:{
        type:String,
        required:true
    },
    swimmingPool:{
        type:Boolean,
        required:true
    }

})



// export the model
module.exports= mongoose.model('Hotels', hotelSchema);

