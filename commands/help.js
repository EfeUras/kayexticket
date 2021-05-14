const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
  
if(!args[0]) {
  
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.addField(`Yardım Menüsü`, `\`${prefix}yardım komutlar\` - Komutlar hakkında bilgi verir.`)

message.channel.send(embed)  }

if(args[0] === 'komutlar') {
  
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription(`() = Tercih.
[] = Gerekli.`)
.addField(`==================================
Ticket Komutları
==================================

\`d!ekle [Etiket] (kanal)\``, `*Açıklama: Ticket a başka birisini/rolü eklersiniz.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`d!sil [Etiket] (kanal)\``, `*Açıklama: Ticket a ekli birisini/rolü silersiniz.
Ekstra kullanım: $kaldır*`)

.addField(`\`d!kapat [Etiket] (kanal)\``, `*Açıklama: Ticket ı kapatırsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`d!aç [Etiket] (kanal)\``, `*Açıklama: Ticket ı açarsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`d!bilet-sil \``, `*Açıklama: Ticket ı silersiniz.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`d!ping [gönder])\``, `*Açıklama: Botun pingini gösterir.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`d!ticket-kanal [ayarla/sıfırla] (kanal)\``, `*Açıklama: Ticket mesajının kanalını ayarlarsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`d!ticket [gönder])\``, `*Açıklama: Ticket mesajını yollar.
Ekstra kullanım: Bulunmuyor.*`)
message.channel.send(embed)  }  

  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};