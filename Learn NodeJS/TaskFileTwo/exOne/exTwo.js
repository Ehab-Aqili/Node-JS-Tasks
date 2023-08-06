const fs = require('fs');


async function Write(){
    try{
    await fs.promises.writeFile('example.txt', "Hello World");
    console.log("Write Scseefuly");
}
catch (err) {
 console.log(err)
}

}

Write()
