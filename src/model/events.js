const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true,
  },
  eventCreator: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "user",
  },
  eventOrganizer: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  },

  eventCategory: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
  },
  eventDate: {
    type: String,
  },
  eventTime: {
    type: String,
  },
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
