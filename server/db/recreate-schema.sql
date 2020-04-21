
DROP TABLE if exists users;

create EXTENSION
if not exists "uuid-ossp";

CREATE TABLE users
(

    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    email VARCHAR(120) NOT NULL,
    password numeric(120),
    country VARCHAR(30),
    phone numeric(30)


);

DROP TABLE if exists products;

CREATE TABLE products
(
    id SERIAL PRIMARY KEY,
    image VARCHAR(500),
    title VARCHAR(120) NOT NULL,
    price numeric ,
    company VARCHAR (50),
    incart BOOLEAN NOT NULL,
    description VARCHAR(400)
);


