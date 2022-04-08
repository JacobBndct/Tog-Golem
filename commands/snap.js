module.exports = {
    name: "snap",
    description: "times out half of current viewers",
    execute(client, channel) {
        client.say(channel, `/me timed out x viewers :skull:`);
    }
}