const fs=require('fs');
const path=require('path');

//Define a folder and file path
const folderPath=path.join(__dirname,'exampleFolder');
const filePath=path.join(folderPath,'exampleFile.txt');

//check if the folder exists or not
if(!fs.existsSync(folderPath)){
  fs.mkdirSync(folderPath);
  console.log('Folder Created Successfully');
}

//writes the data into the file if empty,else overwrites and deletes the previous data
fs.writeFileSync(filePath,'List of data');
console.log('File created successfully');

//appends the data to file given and does not delete the previous data
fs.appendFileSync(filePath,'\nThis is appended line');

//reads files
const content=fs.readFileSync(filePath,'utf8');
console.log(content);

//Deletes files
fs.unlinkSync(filePath);
console.log('File deleted');

//Will throw an error if the folder contains any files or data
fs.rmdirSync(folderPath);
console.log('Folder deleted');

