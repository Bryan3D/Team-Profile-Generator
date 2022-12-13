// Requirer links
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./assets/js/generateHTML.js');
const Manager = require('./library/Manager');
let Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');


// Array of questions for user input
const teamMembers = [];

// Manager input data information Card

function managerInputsData() {
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
        },

        // email Input
        {
            type: 'input',
            name: 'email',
            message: `Please enter the team manager email.`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the team manager!');
                    return false;
                }
            }
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

        });
}

// Engineer or Intern input data information Card

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
        },
        // email Input
        {
            type: 'input',
            name: 'email',
            message: "Please enter the new team member email.",
            _validate: emailInput => {
                
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
            message: 'What is the school of the new team member? (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the school of the new team member!');
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
function createHTML(teamMembers) {  
    const html = [];
    html.push(teamMembers       
        .filter(teamMember => teamMember.getRole() === 'Manager')
        .map(manager => renderManager(manager))
    );
    html.push(teamMembers
        .filter(teamMember => teamMember.getRole() === 'Engineer')
        .map(engineer => renderEngineer(engineer))
        .join('')
    );
    html.push(teamMembers
        .filter(teamMember => teamMember.getRole() === 'Intern')
        .map(intern => renderIntern(intern))
        .join('')
    );
    return renderMain(html.join(''));
}

// Function to write the HTML file
function writeFile(pageHTML) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageHTML, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}




// Function to initialize app

function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the team manager? (Required)',
            validate: managerNameInput => {
                if (managerNameInput) {
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
        },          
        // email Input

        {
            type: 'input',
            name: 'email',
            message: "Please enter the team manager email.",
            _validate: emailInput => {
            
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the team manager!');
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
        },
        {
            type: 'confirm',
            name: 'NewTeamMember',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
        .then(teamData => {
            let { managerName, employeeId, email, officeNumber, NewTeamMember } = teamData;
            let teamMember;
            teamMember = new Manager(managerName, employeeId, email, officeNumber);
            console.log(teamMember);
            teamMembers.push(teamMember);
            if (NewTeamMember) {
                return buildTeam(teamMembers);
            } else {
                return teamMembers;
            }
        }
        )

};

// Function call to initialize app
init();

// fs write html file
function writeFile(pageHTML) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./html_created/index.html`, pageHTML, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}











