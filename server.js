const express = require('express');
const bodyParser = require('body-parser')
const contactDetailRoute = require('./routes/contactDetail.js')
const app = express();

const PORT = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
 
app.use('/',contactDetailRoute);

app.listen(PORT , (err) => {
    if(err){
        console.log(err);
    }
    else{
    console.log("Server started.");
    }
})



