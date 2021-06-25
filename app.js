const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

var employees = [];

// Main Menu
function mainMenu() {
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
}

// Add intern
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is this interns ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is this interns email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'what is this interns school?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        }
    ]).then((answer) => {

        var intern = new Intern(answer.name, answer.id, answer.email, answer.school)
        console.log(intern)

        employees.push(intern)
        console.log(employees)
        mainMenu()
    })
}



function addManager() {
    console.log("very nice")
}
function addEngineer() {
    console.log("Very very nice")
}



mainMenu()
