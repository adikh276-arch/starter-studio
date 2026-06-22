const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'features', 'emotional', 'data', 'guidedSeries.json');
let data = fs.readFileSync(filePath, 'utf8');

const regex = /"route": "\/(?:exercises\/|tools\/|tips\/)?([^"]+)"/g;

data = data.replace(regex, (match, p1) => {
    if (p1.startsWith('http')) return match;
    return `"route": "/emotional/${p1}"`;
});

fs.writeFileSync(filePath, data);
console.log('Fixed guidedSeries.json');
