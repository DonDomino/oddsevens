const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let msg = "";
  for(let i = 1; i <= 50; i ++){
    if(i % 2 === 0) {
      msg += `<p>${i} Soy Par!</p>\n`;
    } else {
      msg += `<p>${i} Soy Impar!</p>\n`;
    }
  }
  res.send(msg);
});

app.listen(3000, () => console.log('Listening on port 3000!'));