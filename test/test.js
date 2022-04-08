const assert = require('assert');

const fs = require('fs');
const commandList = new Map();

//fills command list using files in command folder
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`../commands/${file}`);

    commandList.set(command.name, command);
}

//Command tests
describe("Command tests", () => {
    before(() => {
      console.log( "Executing command tests ..." );
    });
    
    after(() => {
      console.log( "Command tests executed!" );
    });
        
    //deeznuts command test
    describe( "DN command tests", () => {
      beforeEach(() => {
        console.log( "Executing dn tests ..." );
      });
        
      it("dn command does not return null", () => {
        assert.notEqual(commandList.get('dn').execute('TogGolem'), null);
      });
    
    });
    
  });