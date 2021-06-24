const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github, engineer){
        super(name, id, email, github);

        this.engineer = "Engineer";
    }
}

module.exports = Engineer;