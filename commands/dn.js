module.exports = {
    name: "dn",
    description: "DN TROLLFACE",
    execute(client, channel, targetUsername) {
        var dnJokes = [
            'DeezNuts',
            'Dune your mom',
            'Ligma balls',
            'Poutine DeezNuts in your mouth',
            'Goblin on DeezNuts'
        ];

        let randomVariable = Math.floor(Math.random() * dnJokes.length);

        client.say(channel, `/me @${targetUsername} ` + dnJokes[randomVariable] + ' TrollFace');
    }
}