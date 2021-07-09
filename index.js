// const name = "Kuldeep";
// console.log(name);

// Core modules in node
const fs = require("fs");
// fs.writeFileSync("read.txt", "WelcomeKuldeepSingh");
// fs.writeFileSync("read.txt", "WelcomeKuldeepSinghRathoreJii");

// fs.appendFileSync("read.txt", " How are you my brother🤳 :)"); 


const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);

/*
<Buffer 57 65 6c 63 6f 6d 65 4b 75 6c 64 65 65 70 53 69 6e 67 68 52 61 74 68 6f 72 65 4a 69 69 20 48 6f 77 20 61 72 65 20 79 6f 75 20 6d 79 20 62 72 6f 74 68 ... 9 more bytes>
*/

original_data = buf_data.toString();

console.log(original_data);
// WelcomeKuldeepSinghRathoreJii How are you my brother🤳 :)

// Inorder to rename the file.
fs.renameSync("read.txt", "read1.txt")