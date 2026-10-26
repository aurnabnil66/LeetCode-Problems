Create table If Not Exists Employee (
    id int, 
    salary int
);

Truncate table Employee;

insert into Employee (id, salary) values (1, '100');

insert into Employee (id, salary) values (2, '200');

insert into Employee (id, salary) values (3, '300');

select * from Employee;

-- 'select max(salary) from Employee' looks all the salaries and returns 300
-- The outer 'where' reads salary < 300
-- from Employee starts with every row in the table
-- then 'where salary' removes 300 and we are left with 100 and 200
-- now 'select max(salary)' looks at the left offs and returns 200
-- 'as SecondHighestSalary' names the output column
select max(salary) as SecondHighestSalary 
from Employee 
where salary < (select max(salary) from Employee); 