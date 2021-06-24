const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

inquirer.prompt({
    name: "mainMenu",
    type: "list",
    message: "What employee would you like to add?",
    choices: ["Add an Intern", "Add a Manager", "Add an Engineer"]
}).then((answer) => {
    switch (answer.mainMenu) {
        case "Add an Intern":
            addIntern()
            break;
    }
    switch (answer.mainMenu) {
        case "Add a Manager":
            addManager()
            break;
    }
    switch (answer.mainMenu) {
        case "Add an Engineer":
            addEngineer()
            break;
    };
});


function addIntern() {
    console.log("nice")
}
function addManager() {
    console.log("very nice")
}
function addEngineer() {
    console.log("Very very nice")
}
