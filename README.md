```
labber@DESKTOP-I2A15L6:~$ sudo service postgresql start
[sudo] password for labber:
 * Starting PostgreSQL 12 database server                                            [ OK ]
labber@DESKTOP-I2A15L6:~$ psql
Password for user labber:
psql (12.17 (Ubuntu 12.17-0ubuntu0.20.04.1))
Type "help" for help.


-- Create the students table with the specified structure
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    dob DATE
);

-- Insert the sample data
INSERT INTO students (name, email, age, dob) VALUES
('Joe', 'joe@gmail.com', 48, '1973-04-04'),
('Anna', 'anna@gmail.com', 23, '2000-01-01'),
('Frank', 'frank@gmail.com', 34, '1990-04-04'),
('Frank', 'frank@gmail.com', 34, '1990-04-04'),
('Sonya', 'sonya@gmail.com', 24, '2000-04-04');

-- Verify the data
SELECT * FROM students;



labber=# \c students
You are now connected to database "students" as user "labber".
students=# select * from students
students-# ;
 id | name  |      email      | age |    dob
----+-------+-----------------+-----+------------
  1 | Joe   | joe@gmail.com   |  48 | 1973-04-04
  2 | Anna  | anna@gmail.com  |  23 | 2000-01-01
  3 | Joe   | joe@gmail.com   |  48 | 1973-04-04
  4 | Frank | frank@gmail.com |  34 | 1990-04-04
  5 | Frank | frank@gmail.com |  34 | 1990-04-04
  6 | Sonya | sonya@gmail.com |  24 | 2000-04-04
(6 rows)

students=# DELETE FROM students WHERE id = 3;
DELETE 1
students=# select * from students
;
 id | name  |      email      | age |    dob
----+-------+-----------------+-----+------------
  1 | Joe   | joe@gmail.com   |  48 | 1973-04-04
  2 | Anna  | anna@gmail.com  |  23 | 2000-01-01
  4 | Frank | frank@gmail.com |  34 | 1990-04-04
  5 | Frank | frank@gmail.com |  34 | 1990-04-04
  6 | Sonya | sonya@gmail.com |  24 | 2000-04-04
(5 rows)

students=#

```
