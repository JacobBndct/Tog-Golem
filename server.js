require('dotenv').config();

const tmi = require('tmi.js');
// const Timer = require('timer.js');

const fs = require('fs');
const commandList = new Map();

const BST = require('./BST.js');
const Node = require('./BST.js');
const bst = new BST();

let bttvEmotesFile = fs.readFileSync('bttvEmotes.json');
let bttvEmotes = JSON.parse(bttvEmotesFile);

//populates a binary search tree with bttvEmotes
bttvEmotes.forEach(function(emote) {bst.add(emote.emoteName);});

//fills command list using files in command folder
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    commandList.set(command.name, command);
}

//regular expression to find commands
const regexpCommand = new RegExp(/^!([\S]+)(?:\W+)?([a-zA-Z0-9_]+)?/);

//Twitch chat client
const client = new tmi.Client({
    connection: {
        reconnect: true
    },
	options: { debug: true },
	identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
	channels: [ 'Togposh' ]
});

client.connect();

//scans through messages send in twitch chat
client.on('message', async (channel, tags, message, self) => {
	//Ignores messages from itself.
	if (self) return;
    
    //counts emotes and response after X number of times
    let node = new Node();
    node = bst.find(message);
	if (node !== null) {
        node.incrementCount();

        if (node.getCount() % 10 === 0) {
            client.say(channel, `${node.getData()} ${node.getData()} ${node.getData()}`);
        }
        return;
	} else if (message[0] === '!') {
        const [raw, command, argument] = message.match(regexpCommand);
    
        //checks if existing command was entered
        if (command === 'count') {
            commandList.get(command).execute(client, channel, tags.username, node.getData());
        } else if (command === 'dn') {
            commandList.get(command).execute(client, channel, argument);
        } else if (command === 'song') {
            commandList.get(command).execute(client, channel, tags.username);
        } else if (command === 'fortune') {
            commandList.get(command).execute(fs, tags.username);
        }
    }
});