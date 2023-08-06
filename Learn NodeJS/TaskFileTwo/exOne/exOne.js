const fs = require('fs')



async function Read(){
    try {
         
const Data = await fs.promises.readFile('example.txt');
    console.log(Data.toString())
}
catch (err) {
 console.log(err)
}

}
Read()