const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true,
  },
  eventOrganiser: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'user',
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
})

const Event = mongoose.model('event', eventSchema)

module.exports = Event
