module.exports = {
    name: "count",
    description: "counting wooooooooo",
    execute(username, count) {
        return `/me @${username} BIGROLL count is: ${count}`;
    }
}