module.exports = {
    name: "gamer",
    description: "calculates your gaming score based on scientific data",
    execute(client, channel, username) {
        
        client.say(channel, `/me @${username} your gaming score is: `);
    }
}