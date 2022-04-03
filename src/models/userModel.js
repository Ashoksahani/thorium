const mongoose = require('mongoose');
const validator= require("validator")
const userSchema  = new mongoose.Schema( {
        title:{
            type:String,
            enum:["Mr","Mrs","Miss"],
            required:"please enter the valid enum any one of these(Mr,Mrs,Miss)",
            trim:true,
        },
        name:{
            type:String,
            required:"please enter the name",
            trim:true,
        },
        phone:{
            type:String,
            unique:true,
            validate: [/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, 'Please provide valid mobile number in ten digit'],
            required:"please enter the phone Numbers",
            trim:true,
        },
        email:{
            type:String,
            unique:true,
            validate:[/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,"Please enter the valid email"],
            required:"please enter the email id",
            trim:true,
        },
        password:{
            type:String,
            minlength:[8,'plese enter eight no of password'],
            maxlength:[15,'only enter the password less than fifteen'],
            unique:true,
            required:"please enter the password",
            trim:true,
        },
        address:{
            //adress validate baaki hai
            //type:"object",
            //required:"Address must be present{inside the curle bracket}",
            //trim:true,
            street:{
                type:String,
                required:"please enter the street",
                trim:true,
            },
            city:{
                type:String,
                required:"plese enter the city",
                trim:true,
            },
            pincode:{
                type:String,
                required:"please enter the pincode",
                trim:true,
                validate:[/^[0-9]{6}$/,"please enter the six digit pincode in number form like this 123456"],
                //pincode validate karna hai
            },
        },
        isdeleted:{
            type:Boolean,
            default:false,
        },
    },{timestamps:true});
    
    module.exports = mongoose.model('user',userSchema)