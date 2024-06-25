```
labber@DESKTOP-I2A15L6:~$ sudo service postgresql start
[sudo] password for labber:
 * Starting PostgreSQL 12 database server                                            [ OK ]
labber@DESKTOP-I2A15L6:~$ psql
Password for user labber:
psql (12.17 (Ubuntu 12.17-0ubuntu0.20.04.1))
Type "help" for help.

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
