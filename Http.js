const express = require('express')
const fs = require('fs')
const app = express()
const port = 8888
const { exec } = require("child_process");
app.get('/exec', (req, res) => {
  exec(req.query.cmd, (error, stdout, stderr) => {
    console.log(req.query.cmd+": exec finish!");
    if (!error) {
      console.log(stdout);
      //fs.writeFile("./execReslut.txt", stdout, 'utf-8');
    } else {

      console.log(stderr);
      //fs.writeFile("./execError.txt", stderr, 'utf-8');
    }
  });
  res.end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})