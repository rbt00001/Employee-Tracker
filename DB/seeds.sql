USE tracker_db;

INSERT INTO department (id, name_) 

VALUES 
    (01, "CEO"), 
    (02, "Product Manager"), 
    (03, "Web Developer"), 
    (04, "Party Planning Committee");


INSERT INTO role_ (title, salary, department_id)

VALUES 
("CEO", 225000, 01),
("Product Manager", 120000, 02),
("Web Developer", 75000, 02),
("Party Planning Committee", 30000, 03);


INSERT INTO employee (id, first_name, last_name, _role_id, manager_id)

VALUES
(01, "David", "Wallace" 01, 01),
(02, "Andy", "Bernard", 01, 02),
(03, "Dwight", "Schrute", 02, 02),
(04, "Stanley", "Hudson", 03, 02),
(05, "Angela", "Martin", 01, 03),
(06, "Pamela", "Beesly", 02, 03);

SELECT * FROM department;
SELECT * FROM role_;
SELECT * FROM employee;