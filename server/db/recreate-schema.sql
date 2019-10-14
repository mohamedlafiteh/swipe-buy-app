
DROP TABLE if exists users;



CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(120) NOT NULL,
    password VARCHAR(120),
    city VARCHAR(30),


);