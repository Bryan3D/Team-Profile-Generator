"use strict";

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } if (Object.getOwnPropertySymbols) { var objectSymbols = Object.getOwnPropertySymbols(descs); for (var i = 0; i < objectSymbols.length; i++) { var sym = objectSymbols[i]; var desc = descs[sym]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, sym, desc); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Requirer links
var _require2 = _require2('inquirer');

var fs = _require2('fs');

var generateHTML = _require2('./assets/js/generateHTML.js');

var _require = _require2('inquirer'),
    inquirer = _require["default"]; // Array of questions for user input


var teamMembers = []; // Manager input data information Card

var managerInputsData = function managerInputsData() {
  var _validate2, _validate3, _ref, _mutatorMap;

  return inquirer.prompt([{
    type: 'input',
    name: 'managerName',
    message: 'What is the name of the team manager? (Required)',
    validate: function validate(nameInput) {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter the name of the team manager!');
        return false;
      }
    }
  }, (_ref = {
    type: 'input',
    name: 'employeeId',
    message: 'What is the employee ID of the team manager? (Required)',
    validate: function validate(employeeIdInput) {
      {
        if (employeeIdInput) {
          return true;
        } else {
          console.log('Please enter the employee ID of the team manager!');
          return false;
        }
      }
    }
  }, _defineProperty(_ref, "type", 'input'), _defineProperty(_ref, "name", 'email'), _defineProperty(_ref, "message", "Please enter the manager email."), _defineProperty(_ref, "_validate", function _validate(emailInput) {
    if (emailInput) {
      return true;
    } else {
      console.log('Please enter the email of the team manager!');
      return false;
    }
  }), _validate2 = "validate", _mutatorMap = {}, _mutatorMap[_validate2] = _mutatorMap[_validate2] || {}, _mutatorMap[_validate2].get = function () {
    return this._validate;
  }, _validate3 = "validate", _mutatorMap[_validate3] = _mutatorMap[_validate3] || {}, _mutatorMap[_validate3].set = function (value) {
    this._validate = value;
  }, _defineEnumerableProperties(_ref, _mutatorMap), _ref), //  Github address link 
  {
    type: 'input',
    name: 'git',
    message: 'What is the Github address of the team manager? (Required)',
    validate: function validate(gitInput) {
      if (gitInput) {
        return true;
      } else {
        console.log('Please enter the Github address of the team manager!');
        return false;
      }
    }
  }, // office number Input
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the office number of the team manager? (Required)',
    validate: function validate(officeNumberInput) {
      if (officeNumberInput) {
        return true;
      } else {
        console.log('Please enter the office number of the team manager!');
        return false;
      }
    }
  }]).then(function (managerData) {
    var managerName = managerData.managerName,
        employeeId = managerData.employeeId,
        email = managerData.email,
        git = managerData.git,
        officeNumber = managerData.officeNumber;
    var manager = new Manager(managerName, employeeId, email, git, officeNumber);
    teamMembers.push(manager);
    console.log(manager);
  });
}; // Engineer input data information Card


var team = function team() {
  console.log("\n    \n    =================\n    Team of ".concat(managerName, "\n    ================="));
};