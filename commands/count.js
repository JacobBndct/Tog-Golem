module.exports = {
    name: "count",
    description: "counting wooooooooo",
    execute(client, channel, username, count) {
        client.say(channel, `/me @${username} BIGROLL count is: ${count}`);
    }
}