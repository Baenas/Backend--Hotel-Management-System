const mongoose = require("mongoose");

const { Schema } = mongoose;

const roomSchema = new Schema({
    roomName: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    roomFloor: {
        type: String,
        required: true
    },
    roomWifi: {
        type: String,
        required: true
    },
    roomPhone: {
        type: Number,
        required: true
    },
    roomPrice: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        default: "Empty"
    }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
