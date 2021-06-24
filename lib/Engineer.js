const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github, intern){
        super(name, id, email, github);

        this.intern = "Intern";
    }
}

module.exports = Engineer