const { NotFoundError } = require('../errors')
const Events = require('../model/events')

exports.createEvents = async (req, res) => {
  req.body.eventOrganiser = req.user.userId
  const event = await Events.create(req.body)
  res.status(200).json({ msg: 'event created' })
}
exports.getAllEvents = async (req, res) => {
  const events = await Events.find({})
  res.status(200).json({ events })
}
exports.getSingleEvents = async (req, res) => {
  const jobId = req.params.id

  const job = await Events.findOne({ _id: jobId })

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`)
  }
  res.status(200).json({ job })
}
