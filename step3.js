// import fs from 'fs';
const fs = require('fs');
// import axios from 'axios';
const axios = require('axios');

function cat(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        return data;
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

async function webCat(url) {
    try {
        const res = await axios.get(url);
        const data = res.data;
        return data;
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

function writeTo(path, data) {
    try {
        fs.writeFileSync(path, data, 'utf8');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

async function webOrCat(path) {
    if (path.startsWith('http')) {
        return await webCat(path);
    } else {
        return cat(path);
    }
}

async function main(argv) {
    let path;
    const param = argv[2];

    if (param === '--out') {
        const outFile = argv[3];
        path = argv[4];
        writeTo(outFile, await webOrCat(path));
    } else {
        path = param;
        console.log(await webOrCat(path));
    }
}

main(process.argv);