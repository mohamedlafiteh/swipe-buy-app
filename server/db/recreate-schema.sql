
DROP TABLE if exists users;



CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(120) NOT NULL,
    password VARCHAR(120),
    city VARCHAR(30),


);

CREATE TABLE products
(
    id SERIAL PRIMARY KEY,
    picture bytea NOT NULL,
    title VARCHAR(120) NOT NULL,
    price numeric ,
    description VARCHAR(30),


);

insert into products
    (picture,title,price,description)
values( bytea("D:\mo.jpg"), "Phone", 10, "Good condition");

