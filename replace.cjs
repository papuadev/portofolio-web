const fs = require('fs');
let data = fs.readFileSync('./src/data/data.ts', 'utf8');
data = data.replace(/iconClass:\s*\"devicon-([a-z]+)[^\"]*\"/g, 'iconUrl: "/img/icons/$1.svg"');
fs.writeFileSync('./src/data/data.ts', data);
console.log('Replaced data.ts');
