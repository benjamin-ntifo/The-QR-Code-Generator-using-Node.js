import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const answers = await inquirer.prompt([
    { type: 'input', name: 'URL', message: 'Type in your URL:' },
]);
const url = answers.URL;

const qrImage = qr.image(url, { type: 'png' });
qrImage.pipe(fs.createWriteStream('qr_img.png'));

console.log('QR code saved as qr_img.png');

fs.writeFile('URL.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved')
});