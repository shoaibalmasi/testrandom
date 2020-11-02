const express = require('express')
const app = express();

const mongoose = require('mongoose')
const User = require('./model/user')

mongoose.connect('mongodb://localhost:27017/hamvareh', {useNewUrlParser: true}, (err) => {
    if (err) {
      console.error(err)
    }
    else {
      console.log('------------------')
      console.log('mongoose connect')
      console.log('------------------')
    }
  });

for(let i= 0 ; i<300 ; i++){

    let user = new User({
        active : true,
        removeFlag : false,
        username : `ali-${i}`,
        firstName: `ali-${i}`,
        provinceId : "5f9e6e4f6ddedcd654a4bed9",
        type : "passenger",
        phone : "09335238212"
    })

    user.save()
}



app.listen(5000 ,()=>{
console.log('ok');
})