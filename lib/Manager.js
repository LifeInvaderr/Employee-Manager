const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, github, Manager){
        super(name, id, email, github);

        this.Manager = "Manager";
    }
}

module.exports = Manager;