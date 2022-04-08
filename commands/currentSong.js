module.exports = {
    name: "song",
    description: "Displays information about current song",
    execute(client, channel, username) {

        const Spotify = require("spotify-api.js");

        async function test() {
            const spotifyClient = await Spotify.Client.create({ 
                token: { 
                    clientID: process.env.SPOTIFY_CLIENT_ID, 
                    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
                    redirectURL: "http://google.com/callback",
                    refreshToken: process.env.SPOTIFY_REFRESH_TOKEN
                } 
            });

            const player = new Spotify.Player(spotifyClient);
            const currentPlayback = await player.getCurrentlyPlaying();

            if(currentPlayback != null) {
                if(currentPlayback.item != null) {
                    const track = new Spotify.Track(currentPlayback.item, spotifyClient);
                    client.say(channel, `/me @${username} ` + 'Currently song: ' + track.name + ', by ' + track.artists[0].name);
                } else {
                    client.say(channel, `/me @${username} ` + 'No song is playing');
                }
            }
            else {
                client.say(channel, `/me @${username} ` + 'No song is playing');
            }
        }   

        test();
    }
}