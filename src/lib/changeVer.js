const fs = require('fs');

const config = require('../configs/appConfig.json');
const arr = config.ver.split('');
arr.splice(4, 1, +arr[4] + 1);
const newDate = new Date().toLocaleString('uk-UA');
fs.writeFileSync(
  './src/configs/appConfig.json',
  JSON.stringify({
    ...config,
    ver: arr.join(''),
    date: newDate,
  })
);
