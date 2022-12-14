"use strict";

// node modules 
var fs = require('fs');

var inquirer = require('inquirer'); // Page Creation link


var generateHTML = require('./assets/js/generateHTML.js');

var path = require('path'); // Employee Classes


var Manager = require('./library/manager');

var Engineer = require('./library/engineer');

var Intern = require('./library/intern');

var teamMembers = []; // start of manager prompts 

var managerInputsData = function managerInputsData() {
  return inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: "Who is the manager of this team?(Required)",
    validate: function validate(nameInput) {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the manager's name!");
        return false;
      }
    }
  }, // employee ID Input
  {
    type: 'input',
    name: 'id',
    message: "Please enter the manager's ID.(Required)",
    validate: function validate(nameInput) {
      if (isNaN(nameInput)) {
        console.log("Please enter the manager's ID!");
        return false;
      } else {
        return true;
      }
    }
  }, // Email's inputs
  {
    type: 'input',
    name: 'email',
    message: "Please enter the team manager's email.(Required)",
    validate: function validate(email) {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

      if (valid) {
        return true;
      } else {
        console.log('Please enter an email!');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'officeNumber',
    message: "Please enter the manager's office number",
    validate: function validate(nameInput) {
      if (isNaN(nameInput)) {
        console.log('Please enter an office number!');
        return false;
      } else {
        return true;
      }
    }
  }]).then(function (managerInput) {
    var name = managerInput.name,
        id = managerInput.id,
        email = managerInput.email,
        officeNumber = managerInput.officeNumber;
    var manager = new Manager(name, id, email, officeNumber);
    teamMembers.push(manager);
    console.log(manager);
  });
};

var addTeamMember = function addTeamMember() {
  console.log("\n    ======================================================\n    Add Engineer or Intern as a new the Member to you team\n    ======================================================\n    ");
  return inquirer.prompt([{
    type: 'list',
    name: 'role',
    message: "Please choose your employee's role is Engineer or Intern",
    choices: ['Engineer', 'Intern']
  }, {
    type: 'input',
    name: 'name',
    message: "What's the name of the team member?",
    validate: function validate(nameInput) {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter an team member name!");
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'id',
    message: "Please enter the employee's ID.",
    validate: function validate(nameInput) {
      if (isNaN(nameInput)) {
        console.log("Please enter the employee's ID!");
        return false;
      } else {
        return true;
      }
    }
  }, {
    type: 'input',
    name: 'email',
    message: "Please enter the employee's email.(required)",
    validate: function validate(email) {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

      if (valid) {
        return true;
      } else {
        console.log('Please enter an email!');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'github',
    message: "Please enter the team employee's github username.",
    when: function when(input) {
      return input.role === "Engineer";
    },
    validate: function validate(nameInput) {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the team member github username!");
      }
    }
  }, {
    type: 'input',
    name: 'school',
    message: "Please enter the intern's school",
    when: function when(input) {
      return input.role === "Intern";
    },
    validate: function validate(nameInput) {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the intern's school!");
      }
    }
  }, {
    type: 'confirm',
    name: 'confirm addTeamMember',
    message: 'Would you like to add more team members?',
    "default": false
  }]).then(function (employeeData) {
    // data for employee types 
    var name = employeeData.name,
        id = employeeData.id,
        email = employeeData.email,
        role = employeeData.role,
        github = employeeData.github,
        school = employeeData.school,
        confirm_addTeamMember = employeeData.confirm_addTeamMember;
    var employee;

    if (role === "Engineer") {
      employee = new Engineer(name, id, email, github);
      console.log(employee);
    } else if (role === "Intern") {
      employee = new Intern(name, id, email, school, github);
      console.log(employee);
    }

    teamMembers.push(employee);

    if (confirm_addTeamMember) {
      return addTeamMember(teamMembers);
    } else {
      return teamMembers;
    }
  });
}; // function to generate HTML page file using file system 


var writeFile = function writeFile(data) {
  fs.writeFile('teamIndex.html', data, function (err) {
    // if there is an error 
    if (err) {
      console.log(err);
      return; // when the profile has been created 
    } else {
      console.log("Your team profile has been successfully created! Please check out the teamIndex.html");
    }
  });
}; // function call to initialize app


managerInputsData().then(addTeamMember).then(function (teamMembers) {
  return generateHTML(teamMembers);
}).then(function (pageHTML) {
  return writeFile(pageHTML);
})["catch"](function (err) {
  console.log(err);
}); // function call initialize