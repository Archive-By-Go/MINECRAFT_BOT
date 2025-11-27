const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: "JAD_GO.aternos.me",
  port: 56097,
  username: "BOT1",
  version: "1.12.2"
});

bot.on("login", () => {
  console.log("BOT1 دخل السيرفر بنجاح!");
  setTimeout(() => {
    bot.chat("/login jadoda1212");
  }, 5000);
});

bot.on("error", err => console.log("خطأ:", err));
bot.on("end", () => console.log("تم فصل البوت"));

