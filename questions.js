var fs = require("fs");

var command = process.argv[2];

switch (command) {
    case "write":
        writeAFile("demo.txt", "Hello there!");
        break;
    case "read": 
        readAFile("demo.txt");
        readAFile("example.html");
        break;
    default:
        console.log("Give me read or write");
}

function writeAFile(fileName, text) {
    fs.writeFile(fileName, text, function(err){
        if(err) {
            return console.log(err);
        }

        console.log("Wrote a file");
    });
}

function readAFile(fileName) {
    fs.readFile(fileName, "utf8", function(err, data){
        if(err) {
            return console.log(err);
        }
        
        console.log(data);
    });
}