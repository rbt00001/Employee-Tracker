USE tracker_db;

INSERT INTO department (id,name_) 

VALUES 
    (01, "CEO"), 
    (02, "Product Manager"), 
    (03, "Web Developer"), 
    (04, "Party Planning Committee");


INSERT INTO roles (title, salary, department_id)
VALUES 
("CEO", 2250, 01),
("Product Manager", 1200, 02),
("Web Developer", 750, 02),
("Party Planning Committee", 300, 03);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(01, "David", "Wallace" ,01, 00),
(02, "Andy", "Bernard", 02, 01),
(03, "Dwight", "Schrute", 03, 02),
(04, "Stanley", "Hudson", 03, 03),
(05, "Angela", "Martin", 04, 04),
(06, "Pamela", "Beesly", 04, 05);

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;