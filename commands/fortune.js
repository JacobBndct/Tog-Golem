module.exports = {
    name: "fortune",
    description: "Tells fortune of twitch chatter",
    execute(fs, username) {
        //standardize wording
        //make more personal
        const Timer = require('timer.js');
        let myTimer = new Timer();

        let opening = [
            'The celestial alignment indicates that',
            'The planetary energy point to the fact that',
            'The cosmic waves show that',
            'The aspects are telling me that',
            'I can see that'
        ];
        let fortune = [
            //requires more
            'will recieve vip for a day',
            'will recieve a one day ban',
            'will recieve a 100 second time out',
            //just text
            //'should sub with twich prime',
            //'dn joke',
            'shouldn\'t pay their taxes',
            'only has a few days to live...'
        ];
        let ending = [
            'Your lucky numbers are 69, 420, 80085',
            //'Subscribe with twitch prime for more info!',
            'gl LMAO'
        ];  

        //select random from list
        //need to give weight to ban, time out, and vip
        let randomVariable1 = Math.floor(Math.random() * opening.length);
        let randomVariable2 = Math.floor(Math.random() * fortune.length);
        let randomVariable3 = Math.floor(Math.random() * ending.length);

        fs.writeFileSync("TmpTest.txt", opening[randomVariable1] + ` @${username} ` + fortune[randomVariable2] + '. ' + ending[randomVariable3]);
        myTimer.start(10).on('end', function() {
            fs.writeFileSync("TmpTest.txt", "");
        })

        return (opening[randomVariable1] + ` @${args} ` + fortune[randomVariable2] + '. ' + ending[randomVariable3]);
    }
}