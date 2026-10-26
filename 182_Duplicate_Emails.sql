Create table If Not Exists Person (
    id int, 
    email varchar(255)
);

Truncate table Person;

insert into Person (id, email) values (1, 'a@b.com');

insert into Person (id, email) values (2, 'c@d.com');

insert into Person (id, email) values (3, 'a@b.com');

select * from Person;

-- counting the number of occurrence of an email in a column
select email, count(email) from Person group by email;

-- showing the email which occurs more than once (duplicate email)
select email from Person group by email having count(email) > 1;