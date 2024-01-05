// import fs from 'fs';
const fs = require('fs');

function cat(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        console.log(data);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

cat(process.argv[2]);