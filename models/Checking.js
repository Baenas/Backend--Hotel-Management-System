const mongoose = require("mongoose");

const { Schema } = mongoose;

const checkingSchema = new Schema({

  guestID: { type: mongoose.Schema.Types.ObjectId, ref: "Guest" },
  roomID: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
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
  }

});

const Checking = mongoose.model("Checking", checkingSchema);

module.exports = Checking;
