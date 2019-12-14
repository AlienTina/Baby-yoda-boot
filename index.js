const { Client, Attachment } = require('discord.js');
var Jimp = require('jimp');
const client = new Client();
const giphy = require('giphy-api')('Hyq6NWF3DW84UBmDFtF0j82kr3QaNyq3');

client.once('ready', () => {
  console.log('Ready!');
});

const { prefix, token } = require('./config.json');

client.on('message', message => {
  const args = message.content.split(/ +/);
  const command = args.shift().toLowerCase();

  console.log(message.content);

  if(message.content == prefix + 'test'){
    const attachment = new Attachment('https://media.giphy.com/media/YmbxC8Bkj9bZ4yu4Le/giphy.gif');

    message.channel.send(attachment);
  }
  if(message.content.includes('baby yoda')){
    console.log('Baby yoda');
    message.channel.send('Babyyy yooda du du dudududu');
  }

  if(message.content.includes('kokot') || message.content.includes('debil') || message.content.includes('pica') || message.content.includes('pici')){
    message.channel.send('Plez no nadavat');
  }

  if(message.content == prefix + 'DaBoi'){
    giphy.search({
      q: 'baby_yoda mandalorian',
      limit: 50
    }, function (err, res) {
      const attachment = new Attachment('https://media.giphy.com/media/' + res.data[Math.floor(Math.random() * 51)].id + '/giphy.gif');

      message.channel.send(attachment);
  });
  }
  if(command == prefix + 'notdaboi'){
    console.log("Not Boi");
    giphy.random(args.join(' '), function (err, res) {
      if(err != null){
        message.channel.send(err);
      }
      const attachment = new Attachment('https://media.giphy.com/media/' + res.data.id + '/giphy.gif');

      message.channel.send(attachment);
  });
  }
  if(message.content.includes('do or do not')){
    message.channel.send('boomer ok');
  }

  if(command == prefix + "sweetlook"){
    Jimp.read('baby-yoda.jpg')
    .then(image => {
      Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
        // load font from .fnt file
        image.print(font, 10, 10, args.join(' '), 450); // print a message on an image. message can be a any type
        var file = 'baby_yoda_meme.' + image.getExtension();
        image.write(file);
        const attachment = new Attachment(file);

        message.channel.send(attachment);
      });
    })
    .catch(err => {
      message.channel.send(err);
    });
  }

  if(command == prefix + 'sip'){
    Jimp.read('baby-yoda-soup.jpg')
    .then(image => {
      Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
        // load font from .fnt file
        image.print(font, 10, 10, args.join(' '), 600); // print a message on an image. message can be a any type
        var file = 'baby_yoda_meme.' + image.getExtension();
        image.write(file);
        const attachment = new Attachment(file);

        message.channel.send(attachment);
      });
    })
    .catch(err => {
      message.channel.send(err);
    });
  }
  if(command == prefix + 'thereisanother'){
    const attachment = new Attachment('there-is-another.jpg');
    message.channel.send(attachment);
  }

  if(message.content.includes(' ni ')){
    const attachment = new Attachment('baby_yoda_nije.jpeg');
    message.channel.send(attachment);
  }

  if(command == prefix + 'jiaboni'){
    var number = Math.floor(Math.random() * 2)
    var attachment = new Attachment('baby_yoda_nije.jpeg');
    if(number == 0){
      attachment = new Attachment('baby_yoda_nije.jpeg');
    }
    else{
      attachment = new Attachment('baby-yoda-ji.jpg');
    }

    message.channel.send(attachment);
  }

  if(message.content.includes(' ok ')){
    const attachment = new Attachment('baby_yoda_boomer.jpeg');
    message.channel.send(attachment);
  }

});

client.login(token)
