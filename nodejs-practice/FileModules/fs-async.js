const fs=require('fs').promises;
const path=require('path');

const folderPath=path.join(__dirname,'exampleFolder');

async function createFolder(){
  try{
    await fs.access(folderPath);
    console.log("Folder already exists");
  }
  catch{
    await fs.mkdir(folderPath);
    console.log("Folder created successfully");
  }
}

// createFolder();

const filePath=path.join(folderPath,'example.txt');

async function createFile(){
  try{
    await fs.access(filePath);
    console.log("File already exists");
  }
  catch{
    await fs.writeFile(filePath,'example.txt');
    console.log("File created Successfully");
  }
}

// createFile();

async function appendFile(){
  try{
    await fs.appendFile(filePath,'This is data');
    console.log('Data appended successfully');
  }
  catch(error){
    console.log(error);
  }
}

// appendFile();

async function readFile(){
  try{
    const content=await fs.readFile(filePath,'utf8');
    console.log(content);
  }
  catch(error){
    console.log(error);
  }
}

// readFile();

async function deleteFile(){
  try{
    await fs.unlink(filePath);
  }
  catch(error){
    console.log(error);
  }
}

deleteFile();