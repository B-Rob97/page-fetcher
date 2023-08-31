const fs = require('fs');
const request = require('request');

const input = process.argv.slice(2);
const server = input[0];
const localFilePath = input[1];

request(`${server}`, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  let bytes = body.length;

  fs.writeFile(`${{localFilePath}}`, body, err => {
    if (err) {
      console.error(err);
    }
  
    console.log(`Downloaded and saved ${bytes} bytes to ${localFilePath}`);
    
  });
});

