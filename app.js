// functions and needed packages
const inquirer = require('inquirer');
const { internTemplating, managerTemplating, engineerTemplating, htmlTemplate} = require('./src/template')
const { writeFile, copyFile } = require('./utils/generate');

// grabs all models
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// to capture employees added to the management
var employeeIntern = [];
var employeeManager = [];
var employeeEngineer = [];


// Main Menu
function mainMenu() {
    inquirer.prompt({
        name: "mainMenu",
        type: "list",
        message: "What employee would you like to add?",
        choices: ["Add an Intern", "Add a Manager", "Add an Engineer", "Finished"]
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
        }
        switch (answer.mainMenu) {
            case "Finished":
                finished()
                break;
        };
    });
}

// Intern block
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'intern',
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
        // uses constructor function to add as an object
        var intern = new Intern(answer.intern, answer.id, answer.email, answer.school)
        // then is pushed to the employee array for printout
        employeeIntern.push(intern)

        mainMenu()
    })
}

// Manager Block
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
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
        var manager = new Manager(answer.manager, answer.id, answer.email, answer.office)
        employeeManager.push(manager)

        mainMenu()
    })
}

// Engineer block
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineer',
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
            message: 'What is this Engineers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is this Engineers email?',
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
            name: 'github',
            message: 'what is this Engineers github account?',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter an github account!')
                    return false;
                }
            }
        }
    ]).then((answer) => {
        var engineer = new Engineer(answer.engineer, answer.id, answer.email, answer.github)
        employeeEngineer.push(engineer)

        mainMenu()
    })
}

// Finished block to add to html
function finished() {
    // Uses templating engine to get string 
    const allInterns = internTemplating(employeeIntern)
    const allManagers = managerTemplating(employeeManager)
    const allEngineers = engineerTemplating(employeeEngineer)

    // Uses templating engine to write page
    const allEmployees = (allInterns + allManagers + allEngineers)
    const formatedData = htmlTemplate(allEmployees)
    writeFile(formatedData)
}
// to start the menu
mainMenu()

