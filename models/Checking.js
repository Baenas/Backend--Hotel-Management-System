const mongoose = require("mongoose");

const { Schema } = mongoose;

const checkingSchema = new Schema({

  guestID: { type: mongoose.Schema.Types.ObjectId, ref: "Guest", required: true },
  roomID: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  nights: {
    type: Number,
    required: true,
  },
  day_From: {
    type: String,
    required: true,
  },
  day_To: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    default: "En espera"
  },
  extra: [{ type: mongoose.Schema.Types.ObjectId, ref: "Extra" }],
  extraguest: [{
    name: {
      type: String,
    },
    age: {
      type: Number,
    }
  }],


});

const Checking = mongoose.model("Checking", checkingSchema);

module.exports = Checking;
