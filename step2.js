// import fs from 'fs';
const fs = require('fs');
// import axios from 'axios';
const axios = require('axios');

function cat(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        console.log(data);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

async function webCat(url) {
    try {
        const res = await axios.get(url);
        const data = res.data;
        console.log(data);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

const param = process.argv[2];

if (param.startsWith('http')) {
    webCat(param);
} else {
    cat(param);
}

