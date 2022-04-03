const mongoose = require('mongoose');
const userModel = require('../models/userModel')
const ObjectId = mongoose.Schema.Types.ObjectId


const bookSchema = new mongoose.Schema( {
    title:{
        type: String,
        unique:true,                                           
        required:"please enter the book title",
        trim:true,
    },
    excerpt:{
        type:String,
        required:"please enter the excert",
        trim:"true",
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:"please enter the userId",
        trim:true,
        },
        ISBN:{
            type:String,
            unique:true,
            required:"please enter the ISBN",
            trim:true,
        },
        category:{
            type:String,
            required:"please enter the category",
            trim:true,
        },
        subcategory:{
            type:String,
            required:"please enter the subcategory",
            trim:true,
        },
        reviews:{
            type:Number,
            default:"0",
            trim:true,
            //validate
        //comment:String
        },
        deletedAt:{
            type:Date,
            default:Date.now,
        },
        isDeleted:{
            type:Boolean,
            default:false,
            trim:true,
        },
        releasedAt:{
            type:Date,
            required:"please enter the date in this format(YYYY-MM-DD)",
            //default:Date.now,
            //format("YYYY-MM-DD"),
            trim:true,
        },
    
    },{timestamps:true});
    
    module.exports = mongoose.model('books',bookSchema)