const path=require('path');

const filePath='/users/files/path.txt';

//File Name
console.log(path.basename(filePath));

//Directory Name
console.log(path.dirname(filePath));

//Extension name
console.log(path.extname(filePath));

//Join multiple path segments
const joinedPath=path.join('/users','files','test.txt');
console.log(joinedPath);
//Output
// Windows: \users\files\test.txt
// macOS/Linux: /users/files/test.txt

//get absolute path i.e., full path to current working directory +test.txt
const absPath=path.resolve('test.txt');
console.log(absPath);


//filename
console.log(__filename);


//dirname
console.log(__dirname);

