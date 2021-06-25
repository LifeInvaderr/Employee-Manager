const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

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
                    console.log('Please enter a name!');
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
        employees.push(intern)
        console.log(employees)
        mainMenu()
    })
}



function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is this Managers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is this Managers email?',
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
            name: 'office',
            message: 'what is this Managers office number?',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        }
    ]).then((answer) => {
        var manager = new Manager(answer.name, answer.id, answer.email, answer.office)
        employees.push(manager)
        console.log(employees)
        mainMenu()
    })
}


function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is this Managers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is this Managers email?',
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
            name: 'office',
            message: 'what is this Managers office number?',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter an office number!')
                    return false;
                }
            }
        }
    ]).then((answer) => {
        var manager = new Manager(answer.name, answer.id, answer.email, answer.office)
        employees.push(manager)
        console.log(employees)
        mainMenu()
    })
}



mainMenu()
