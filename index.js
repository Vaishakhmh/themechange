//const confire=require('./config');
const bodyParser=require('body-parser');
const express=require('express');
const userRoute=require('./routes/user');
const cors=require('cors');
const path = require("path");
const app=express();
app.use(express.static(path.resolve(__dirname, "./client/fornt/build")));
app.use(cors())
app.use(bodyParser());


if (process.env.NODE_ENV === "production") {
    // Add custom routes before JSON Server router
    app.get("*", (req, res) => {
      res.sendFile(
        path.resolve(__dirname, "../", "client", "build", "index.html")
      );
    });
  }


app.use(userRoute);

const mongoose=require('mongoose');
const config = require('./config');
const connect=mongoose.connect(encodeURI(config.connectionUrl),{connectTimeoutMS:1000}).then(()=>{
    console.log('connected');

}).catch((err)=>{
    console.log(err);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('Server Started at ',PORT);
})

module.exports=app;