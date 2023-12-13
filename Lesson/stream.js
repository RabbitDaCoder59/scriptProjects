const fs = require("fs");

const readStream = fs.createReadStream("./text.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./text1.txt");

// readStream.on("data", (chunk) => {
//   console.log("-------New Data------");
//   console.log(chunk);
//   writeStream.write("\nNew Chunk\n");
//   writeStream.write(chunk);
// });

// piping
readStream.pipe(writeStream);
