'use strict'
const Botkit = require('botkit')
const Conversation = require('./conversation')

const slack_token = process.env.rZhJiAYaOiozAYEtelmOnZTy
const slack_oauth = process.env.xoxp-4292018802-210234045601-238751612722-daca84771cbc6e03ddb781ef22c07ed3

export.fn = {
	/**
	 * Starts Slack-Bot
	 *
	 * @returns {*}
	 */
	 slackBot() {
	   const controller = Botkit.slackbot({
	     require_delivery: true
	   })
	   const slackBot = controller.spawn({
	     token: slack_token 
	   })
	   slackBot.startRTM((err, bot, payload) => {
	     if (err) throw new Error('Could not make connection')
	     controller.log('Slack connection established')
	   })
	   controller.hears(['.*'], ['direct_message', 'direct_mention'], (bot, msg) => {
	   	  Conversation.sendMessage(String(message.text), undefined)
	   	    .then(response => {
	   	    	controller.log('Response received from Watson')
	   	    	if (response.intents[0].intent === 'xxx') {
				slackController.log('Detected intent');
				bot.reply(message, 'I got intent xxx');
			   } 
			   if (response.intents[0].intent === 'yyy') {
				slackController.log('Detected intent');
				bot.reply(message, 'I got intent yyy');
			   } 
			   if {
				slackController.log('Could not detect intent');
				bot.reply(message, 'I do not know what you want');
			   }
	   	       bot.reply(message, response.output.text.join('\n'))
	   	    })
	   	    .catch(err => console.error(JSON.stringify(err, null, 2)))
	   })
	 }
}