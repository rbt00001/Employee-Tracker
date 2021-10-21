const mysql = require("mysql2");
// const { allowedNodeEnvironmentFlags, exit } = require("process");
require("dotenv").config();
require("console.table");
const inquirer = require("inquirer")


const connection = mysql.createConnection({
    

    host: "localhost",
  
    // Port
    port: 3306,
  
    // username
    user: "root",
  
    // password
    password: process.env.MYSQLPW ,
    database: "tracker_db"
  
})

connection.connect(function(err) {
    if (err) throw err;
    displayMenu()
});
 const displayMenu = () => {
     inquirer.prompt([
         {
             type:"list",
             message:"Please select option",
            choices: ["Add employee", "Add role" , "Add department", "Update employee", "View all departments", "View all employees", "View all roles", "Exit"],
            name: "UserData"
            }
            
     ]) 
     .then(function ({  UserData }){
         switch(UserData){
             case"Add employee":
             addEmployee()
             break;
             case"Add role":
             addRole()
             break;
             case"Add department":
             addDept()
             break;
             case"Update employee":
             updateEmployee()
             break;
             case"View all departments":
             viewDepts()
             break;
             case"View all employees":
             viewEmployees()
             break;
             case"View all roles":
             viewRoles()
             break;
             case"Exit":
             process.exit(0)


         }
     })
 }

 function viewDepts(){
     connection.query(
         "SELECT * FROM department;", function(err,data){

            if (err) throw err;
            console.table("Emp list",data)
         })
        displayMenu();
     
 }