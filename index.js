const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();


client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    qrcode.generate(qr, {small: true})
    // console.log('QR RECEIVED', qr);
 
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }else if (msg.body == 'halo') {
        msg.reply('halo juga');
    }else if (msg.body == 'bantuan') {
        msg.reply('hubungi timsar');
    }else{
        msg.reply('perintah tidak diketahui, masukkan kalimat !ping, halo atau bantuan');
    }
});

client.initialize();