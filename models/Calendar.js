const mongoose = require("mongoose");

const { Schema } = mongoose;

const calendarSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Extra;
