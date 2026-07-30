import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const icons = [
  { name: 'react', url: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'typescript', url: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'tailwindcss', url: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'nextjs', url: 'https://cdn.simpleicons.org/nextdotjs/black' },
  { name: 'nodejs', url: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'express', url: 'https://cdn.simpleicons.org/express/black' },
  { name: 'postgresql', url: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'mysql', url: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'git', url: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'docker', url: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'linkedin', url: 'https://cdn.simpleicons.org/linkedin/0A66C2' },
  { name: 'github', url: 'https://cdn.simpleicons.org/github/black' }
];

const dir = path.join(__dirname, 'public', 'img', 'icons');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

icons.forEach(icon => {
  const file = fs.createWriteStream(path.join(dir, `${icon.name}.svg`));
  https.get(icon.url, function(response) {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${icon.name}.svg`);
    });
  });
});
