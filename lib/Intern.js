const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, github, intern){
        super(name, id, email, github);

        this.intern = "Intern";
    }
}

module.exports = Intern;