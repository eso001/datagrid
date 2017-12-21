var fs = require('fs')
var csvjson = require('csvjson');
var path = require('path')

var data = fs.readFileSync(path.join(__dirname, 'abc.csv'), { encoding : 'utf8'});

var options = {
  delimiter : ',', // optional
  quote     : '"' // optional
};

var jsonObj = csvjson.toObject(data, options);

console.log('finished csv to json', jsonObj)