const mongoose = require("mongoose");

const { Schema } = mongoose;

const guestSchema = new Schema({
 guestName:{
        type:String,
        required:true
    },
	guestFullName:{
        type:String,
        required:true
    },
	
	guestIdCard:{
        type:String,
        required:true
    },
	guestAge: {
        type:String,
        required:true
    },
	guestEmail: {
        type:String,
        required:true
    },
	guestPhone: {
        type:Number,
        required:true
    },
	guestCountry: {
        type:String,
        required:true
    },
	guestCity:{
        type:String,
        required:true
    },
});

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;
