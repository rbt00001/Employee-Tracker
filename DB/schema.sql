DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;


CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name_ VARCHAR(30) NOT NULL
)

CREATE TABLE role_ (
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (6,2),
  FOREIGN KEY (department_id) REFERENCES department(id) NOT NULL,
)


CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  _role_id INT NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES roles(id),
)
