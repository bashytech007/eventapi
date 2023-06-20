const Event = require("../model/events");


exports.createEvents=async(req,res)=>{
    req.body.eventCreator = "6491aed4d28418ed429ac6fb";
    const event = await Events.create(req.body);
    res.status(200).json({ msg: "event created" });
   
}
exports.getAllEvents=async(req,res)=>{
    res.send('getAllEvents')
}
exports.getSingleEvents=async(req,res)=>{
    res.send('getSingleEvents')
}
