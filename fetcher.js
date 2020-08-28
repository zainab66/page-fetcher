const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  fs.writeFile(args[1], body, error => {
    if (error) {
      return console.log(error);
    }
    fs.stat(args[1], function (error, stats) {
      console.log('Downloaded and saved ', stats.size, ' bytes to ', args[1]);
    });
  });
});

