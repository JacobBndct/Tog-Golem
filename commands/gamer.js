module.exports = {
    name: "gamer",
    description: "calculates your gaming score based on scientific data",
    execute(username) {
        
        return `/me @${username} your gaming score is: `;
    }
}