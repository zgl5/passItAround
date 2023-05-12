const express = require('express')
const app = express()


app.get('/', (req, res) => {
    let message =  '<div style="font-family: Arial; font-size: 16px; font-style: oblique; color: blue; line-height: 1.6">' + "99 bottles of beer on the wall, <br> Take one down,<br> pass it around, <br>"
    message += '<a href="/98"> 98 bottles now </a>';  // link to first verse
    res.send(message);
   
});

app.get('/:number_of_bottles', (req, res)=>{
    const numBottles= parseInt(req.params.number_of_bottles)
    let message=""
for (let i = numBottles; i >0; i--) {
    if (i>1){
          message += '<div style="font-family: Arial; font-size: 16px; font-style: oblique; color: blue; line-height: 1.6">' + i+ " bottles of beer on the wall,<br>"
          message +=  "Take one down,<br> pass it around, <br>"
          message += (i - 1) + ' <a href="/' + (i - 1) + '">bottles now</a>'  // link to next page
          break    // if no break the message continue until 0 at the same page
    } else if (i==1){  // to give a specila message for last bottle
         message += '<div style="font-family: Arial; font-size: 16px; font-style: oblique; color: green; line-height: 1.6">' + i + " bottle of beer on the wall <br>"
         message += "Take one down,<br> pass it around, <br>  "
         message += "no more bottles. <br>"
         message += '<a href="/">  start again </a>' //link to home page
    }
  
     }   
     if (numBottles === 0) {   //executed after the loop has finished executing.
        message = '<div style="font-family: Arial; font-size: 16px; font-style: oblique; color: red; line-height: 1.6">' + "No more bottles of beer on the wall. <br>"
        message += '<a href="/">  start again </a>'  // link to home page
    }
 res.send (message)
})

app.listen(3001, () => {
    console.log('have fun...');
});
