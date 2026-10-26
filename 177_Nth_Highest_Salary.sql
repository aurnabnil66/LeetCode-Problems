Create table If Not Exists Employee (
    Id int, 
    salary int
);

Truncate table Employee;

insert into Employee (id, salary) values (1, '100');

insert into Employee (id, salary) values (2, '200');

insert into Employee (id, salary) values (3, '300');

select * from Employee;

-- function to find the nth highest distinct salary from the Employee table
-- 'create or replace' lets us rerun this file without a 'function already exists' error
-- n int                  -> the input number (which highest salary to find)
-- returns table (salary) -> output is a table with one int column named salary
-- $$ ... $$              -> quotes the whole function body as one block of text
-- begin ... end      -> start and end of the function's logic (PL/pgSQL)
-- return query ( )   -> run the query inside and return its rows as the function result
-- no semicolon allowed inside the parentheses
--------------------------------------------------------------------------
---------------------------- The result query ----------------------------
--------------------------------------------------------------------------
-- 'E' is a TABLE ALIAS (nickname) for Employee
-- Needed because 'returns table (salary int)' creates a variable called salary
-- which clashes with the column salary -> "column reference is ambiguous" error
-- 'E.salary' clearly means "the salary column of Employee"
-- 'distinct' -> each salary value appears once, so duplicates count once
-- e.g. 300, 300, 200 -> 300, 200 (so the 2nd highest is 200, not 300)
-- 'desc' -> sort highest to lowest (the default, asc, would give lowest first)
-- offset n - 1 -> skip the first n - 1 salaries; 
-- limit 1 -> take the next one 
-- limit 1 -> takes one row
-- n = 1 -> skip 0 -> 300 
-- n = 2 -> skip 1 -> 200 
-- n = 3 -> skip 2 -> 100
-- n larger than the number of distinct salaries -> skips past the end -> no row
-- offset needs a NUMBER (n - 1), not a comparison (1 < n gives true/false -> error)
-- n <= 0 -> negative offset -> Postgres error "OFFSET must not be negative"
create or replace function NthHighestSalary(n int) returns table (salary int) as $$
begin
  return query (
    select distinct E.salary from Employee E 
    order by E.salary desc
    limit 1 offset n - 1
  );
end;
$$ language plpgsql;

select * from NthHighestSalary(2);

-- Idea: remove duplicate salaries, sort high to low, skip n-1 rows, take 1.
-- Lessons: table alias vs column alias, offset is 0-based, rerun create after edits.
