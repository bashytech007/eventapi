const express = require('express')
const router = express.Router()
const Event = require('../controller/event')
const authMiddleWare = require('../middleware/auth')

router.post('/', authMiddleWare, Event.createEvents)
router.get('/', Event.getAllEvents)
router.get('/:id', Event.getSingleEvents)

module.exports = router
