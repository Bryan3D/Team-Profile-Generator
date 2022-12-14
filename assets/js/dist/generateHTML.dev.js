"use strict";

// Create Manager Card
var generateManagerCard = function generateManagerCard(manager) {
  return "\n    <div class=\"manager-card col-4 mt-4 mx-2\">\n    <div class=\"card h-100\">\n    <div class=\"card-header text-white bg-dark\">\n                \n                <h3>".concat(manager.name, "</h3>\n                <h4>Manager</h4>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-cup-hot-fill\" viewBox=\"0 0 16 16\">\n                  <path fill-rule=\"evenodd\" d=\"M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z\"/>\n                  <path d=\"m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z\"/>\n                </svg>\n              </div>\n\n              <div class=\"card-body text-dark\">\n                <p class=\"managerID\">Employee ID:").concat(manager.id, "</p>\n                <p class=\"managerEmail\">Email:<a href=\"mailto:").concat(manager.email, "\">").concat(manager.email, "</a></p>\n                <p class=\"officeNumber\">Office Number: ").concat(manager.officeNumber, "</p>\n              </div>\n            </div>\n          </div>\n");
}; // Create Intern Card


var generateInternCard = function generateInternCard(intern) {
  return "\n  <div class=\"inter-card col-4 mt-4 mx-2\">\n  <div class=\"card h-100\">\n  <div class=\"card-header text-white bg-dark\">\n                <h3>".concat(intern.name, "</h3>\n                <h4>Inter</h4>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"currentColor\" class=\"bi bi-mortarboard-fill\" viewBox=\"0 0 16 16\">\n                  <path d=\"M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z\"/>\n                  <path d=\"M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z\"/>\n                </svg>\n              </div>\n              <div class=\"card-body text-dark\">\n                <p class=\"engineerId\">Employee ID:").concat(intern.id, "</p>\n                <p class=\"email\">Email:<a href=\"mailto:").concat(intern.email, "\">").concat(intern.email, "</a></p>\n                <p class=\"intern-school\">School:").concat(intern.school, "</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  ");
}; // Create Engineer Card


var generateEngineerCard = function generateEngineerCard(engineer) {
  return "\n    <div class=\"engineer-card col-4 mt-4\">\n    <div class=\"card h-100\">\n    <div class=\"card-header text-white bg-dark\">\n                <h3>".concat(engineer.name, "</h3>\n                <h4>Engineer</h4>\n                <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                width=\"32\"\n                height=\"32\"\n                fill=\"currentColor\"\n                class=\"bi bi-eyeglasses\"\n                viewBox=\"0 0 16 16\"\n              >\n                <path\n                  d=\"M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z\"\n                />\n              </svg>\n              </div>\n              <div class=\"card-body text-dark\">\n                <p class=\"employeeId>Employee ID:").concat(engineer.id, "</p>\n                <p class=\"email\">Email:<a href=\"mailto:").concat(engineer.email, "\">").concat(engineer.email, "</a></p>\n                <p class=\"gitHub\">GitHub:<a href=\"https://github.com/").concat(engineer.github, "\"> ").concat(engineer.github, " </a></p>\n              </div>\n            </div>\n          </div>\n          ");
}; // Create HTML 


generateHTML = function generateHTML(data) {
  // Card Array
  htmlArr = []; // Manager Card

  for (var i = 0; i < data.length; i++) {
    var employee = data[i];
    var role = employee.getRole(); // Manager Card

    if (role === "Manager") {
      var managerCard = generateManagerCard(employee);
      htmlArr.push(managerCard);
    } // Engineer Card


    if (role === "Engineer") {
      var engineerCard = generateEngineerCard(employee);
      htmlArr.push(engineerCard);
    } // Intern Card


    if (role === "Intern") {
      var internCard = generateInternCard(employee);
      htmlArr.push(internCard);
    }
  }

  var teamCards = htmlArr.join("");
  var generateTeam = generateTeamPage(teamCards);
  return generateTeam;
}; // Generate Team Page


var generateTeamPage = function generateTeamPage(teamCards) {
  return "\n  <!DOCTYPE html>\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\" />\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css\" />\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"/>\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65\" crossorigin=\"anonymous\"/>\n      <link rel=\"stylesheet\" href=\"./assets/css/style.css\" />\n      <title>Team Profile Generator</title>\n    </head>\n    <body>\n      <header>\n      <div class=\"jumbotron\">\n      <h1 class=\"display-4 text-center\">Team Members Profile</h1>\n      <hr class=\"my-4\" />\n      \n      </div>\n      \n      <main>\n      <div class=\"container\">\n      <div class=\" row justify-content-center col-4 mb-0 mt-4 mx-2 w-100 \">\n      \n            ".concat(teamCards, "\n        \n          </div>\n        </div>\n        <footer class=\"footer\">\n        <div class=\"container\">\n          <span class=\"text-muted\">\xA92022 by Bryan A Quero</span>\n        </div>    \n      </footer>\n      </main>\n      </header>\n    </body>\n    <script\n    src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\"\n    integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\"\n    crossorigin=\"anonymous\"\n  ></script>\n  <script\n    src=\"https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js\"\n    integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\"\n    crossorigin=\"anonymous\"\n  ></script>\n  <script\n    src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js\"\n    integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\"\n    crossorigin=\"anonymous\"\n  ></script>\n  </html>\n  ");
}; // Export HTML


module.exports = generateHTML;