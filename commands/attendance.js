module.exports = {
    name: "attendance",
    description: "keeps track of the usernames of everyone who uses the command",
    execute(username) {
        return `/me @${username} was marked as present`;
        //store the username of user into a data sheet or format such as .json or .txt
    }
}