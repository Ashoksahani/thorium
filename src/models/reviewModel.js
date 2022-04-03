const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:[true,"please enter the bookId"],
        trim:true,
    },
    reviewedBy:{
        type:String,
        //required:"please enter the your name",
        trim:true,
        default:'Guest',
        //value:reviewer's name,
    },
    reviewedAt:{
        type:Date,
        //default:Date.now,
        required:"it is mandatory to fill the date in this  format(YYYY-MM-DD)"
    },
    rating:{
        type:Number,
        required:"it is mandatory to give rating one and five between",
        minlength:[1,'please enter the number between one and five'],
        maxlength:[5,'only enter the number less than five'],
        trim:true,
    },
    review:{
        type:String,
        default:"It is optional",
        trim:true,
    },
    isDeleted:{
        type:Boolean,
        default:false,
        trim:true,
    },
},{timestamps:true});
    
module.exports = mongoose.model('review',reviewSchema)