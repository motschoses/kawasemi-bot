const Botkit = require('botkit');
const controller = Botkit.slackbot();

controller.spawn({
    token : process.env.token
}).startRTM();

controller.hears('hello', [ 'direct_message', 'direct_mention', 'mention' ], (bot, message) => {
    bot.reply(message, 'Hello yourself, hahaha!');
});

controller.hears(['na', 'ka', 'ta'], 'direct_message,direct_mention,mention', function(bot, message) {
 
        bot.reply(message, 'I\'m a perfect human.');
 
});

controller.hears(['挨拶', 'こんにちは', 'Bot', 'あなた', '誰', 'だれ', '自己紹介'], 'direct_message,direct_mention,mention', function (bot, message) {

        bot.reply(message, 'こんにちは！私は *Botkit製のBot* です！ \n _いろんな事ができますよ！_ :smiley:');

});