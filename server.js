const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  // Port
  port: 3306,

  // username
  user: "root",

  // password
  password: process.env.MYSQLPW,
  database: "tracker_db",
});

connection.connect(function (err) {
  if (err) throw err;
  displayMenu();
});
const displayMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select option",
        choices: [
          "Add employee",
          "Add role",
          "Add department",
          "Update employee",
          "View all departments",
          "View all employees",
          "View all roles",
          "Exit",
        ],
        name: "UserData",
      },
    ])
    .then(function ({ UserData }) {
      switch (UserData) {
        case "Add employee":
          addEmployee();
          break;
        case "Add role":
          addRole();
          break;
        case "Add department":
          addDept();
          break;
        case "Update employee":
          updateEmployee();
          break;
        case "View all departments":
          viewDepts();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "Exit":
          process.exit(0);
      }
    });
};

function viewDepts() {
  connection.query("SELECT * FROM department;", function (err, data) {
    if (err) throw err;
    console.table("Emp list", data);
  });
  displayMenu();
}

function viewEmployees() {
  connection.query("SELECT * FROM employee", function (err, res) {
    console.table(res);
  });
  displayMenu();
}

addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter employee first name.",
        name: "employeeFirstName",
      },

      {
        type: "input",
        message: "Please enter employee last name.",
        name: "employeeLastName",
      },

      {
        type: "list",
        message: "Select employee role.",
        choices: ["Engineer", "Salesperson", "Account Manager", "Lawyer"],
        name: "newEmployeeRole",
      },
      {
        type: "input",
        message: "Enter manager name",
        name: "newEmployeeManager",
      },
    ])
    .then((data) => {
      let id = 1;
      let managerId = 1;
      let roleId = 1;
      let first = data.employeeFirstName;
      let last = data.employeeLastName;
      connection.query(
        `INSERT INTO employee
              (id,first_name, last_name, role_id, manager_id)
                  SET = ?`,
        id,
        first,
        last,
        roleId,
        managerId
      );
      console.log(
        `${data.employeeFirstName} ${data.employeeLastName} has been added to the database.`
      );
      runEmployeeManager();
    });
};
