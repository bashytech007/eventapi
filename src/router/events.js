const express=require('express')
const router = express.Router();
const Event = require("../controller/event");

router.post("/",Event.createEvents)
router.get("/",Event.getAllEvents)
router.get('/:id",Event.getSingleEvent')

module.exports=router