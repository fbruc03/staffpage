const express = require('express')
const app = express()

const port = 3000;

app.use('/css', express.static(__dirname + '/css/'));
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/crawler.html')
})
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })