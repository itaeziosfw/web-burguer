import mongoose from "mongoose";

//mongoose.connect('mongodb://localhost:27017/webburg', {useNewUrlParser: true, useUnifiedTopology: true});//

const OrderSchema = new mongoose.Schema({

    User:{
        id:{
            type:String,
            required: true,
        },
    },
     produts:[
     {
        id: {
            type: Number,
            required:true,

        },
     
    name:{
            type:String,
            required: true,
        
    },

    price:{
        type:Number,
        required: true,
    },

    cretory:{
        type:String,
        required: true,
},
url:{
type:String,
required:true,
},
quantity:{
    type:Number,
    required: true,
},


     },
],
status:{
    type: String,
    required: true,
},
},
{
timestamps:true
},


);


export default mongoose.model("Order", OrderSchema);