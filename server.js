const cors = require("cors");
const express = require("express");
const connectDB = require("./src/database/index");
const dotenv = require("dotenv").config();
const router = require("./src/router/index");
const eventRouter=require("./src/router/events")
const errorHandlerMiddleWare=require("./src/middleware/errorHandler")
const app = express();
app.use(cors({origin:"*"}))
app.use(express.json());

app.use("/events", eventRouter);

app.use("/",router)



const Port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(errorHandlerMiddleWare)
connectDB().then((con) => {
  console.log(`DATABASE IS CONNECTED`);
});
app.listen(Port, console.log(`app running on ${Port}`));
