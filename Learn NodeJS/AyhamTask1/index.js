const fs = require("fs");
const readline = require("readline");

async function main() {
  try {
    await fs.promises.access("input.txt");
    console.log("Input file exists");

    try {
      await fs.promises.access("output.txt");
      console.log("Output file exists");

      const answer = await askUser(
        "The output file already exists. Do you want to overwrite it? (y/n) "
      );

      if (answer.toLowerCase() === "y") {
        await writeFile();
      } else {
        console.log("Operation cancelled");
      }
    } catch (err) {
      await writeFile();
    }
  } catch (err) {
    console.log("Input file does not exist");
    console.log(err);
  }
}

async function writeFile() {
  try {
    await fs.promises.writeFile("output.txt", "New file content");
    console.log("File written successfully");
  } catch (err) {
    console.log("Error writing file");
    console.log(err);
  }
}

function askUser(question) {
  const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

main();
