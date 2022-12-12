// Requirer links
const require = require('inquirer')
const fs = require('fs');
const generateHTML = require('./assets/js/generateHTML.js');
const { default: inquirer } = require('inquirer');

// Array of questions for user input
const teamMembers = [];

// Manager input data information Card

const managerInputsData = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the team manager? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the team manager!');
                    return false;
                }
            }
        },
        // employee ID Input
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee ID of the team manager? (Required)',
            validate: employeeIdInput => {
                {
                    if (employeeIdInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter the employee ID of the team manager!');
                        return false;
                    }
                }
            },

        // email Input
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager email.",
            _validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the team manager!');
                    return false;
                }
            },
            get validate() {
                return this._validate;
            },
            set validate(value) {
                this._validate = value;
            },
        },

        //  Github address link 
        {
            type: 'input',
            name: 'git',
            message: 'What is the Github address of the team manager? (Required)',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('Please enter the Github address of the team manager!');
                    return false;
                }
            }
        },
        // office number Input
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the team manager? (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the office number of the team manager!');
                    return false;
                }
            }
        }
    ])
        .then(managerData => {
            const { managerName, employeeId, email, git, officeNumber } = managerData;
            const manager = new Manager(managerName, employeeId, email, git, officeNumber);
            teamMembers.push(manager);
            console.log(manager);

        })
};

// Engineer input data information Card

const buildTeam = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'task',
            message: 'What is the task of the team member?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the new team member? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the new team member!');
                    return false;
                }
            }
        },
        // employee ID Input
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee ID of the new team member? (Required)',
            validate: employeeIdInput => {
                {
                    if (employeeIdInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter the employee ID of the new team member!');
                        return false;
                    }
                }
            },
        // email Input
        {
            type: 'input',
            name: 'email',
            message: "Please enter the new team member email.",
            _validate: emailInput => {
                valid = 
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the new team member!');
                    return false;
                }
            }
        },
        //  Github address link
        {
            type: 'input',
            name: 'git',
            message: 'What is the Github address of the new team member? (Required)',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('Please enter the Github address of the new team member!');
                    return false;
                }
            }
        },
        // school Input
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the new team intern\'s member? (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the school of the intern\'s member!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'NewTeamMember',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
        .then(teamData => {
            let { name, employeeId, email, git, school, role, NewTeamMember } = teamData;
            let teamMember;
            if (role === 'Engineer') {
                teamMember = new Engineer(name, employeeId, email, git);
                console.log(teamMember);
            } else if (role === 'Intern') {
                teamMember = new Intern(name, employeeId, email, school);
                console.log(teamMember);
            }
            teamMembers.push(teamMember);
            if (NewTeamMember) {
                return buildTeam(teamMembers);
            } else {
                return teamMembers;
            }
        }
        )

};

// Function to the app create the HTML file by fs(File System)
const createHTML = (teamMembers) => {
    fs.writeFile('./dist/index.html', generateHTML(teamMembers), err => {
        if (err) throw new Error(err);
        console.log('Your team profile has been created! Check out the index.html to see it!');
    });
}

// Function to initialize app
const init = () => {
    managerInputsData()
        .then(buildTeam)
        .then(teamMembers => {
            return createHTML(teamMembers);
        })
        .catch(err => {
            console.log(err);
        });
};
