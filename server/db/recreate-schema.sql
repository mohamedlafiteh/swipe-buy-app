
DROP TABLE if exists users;

create EXTENSION
if not exists "uuid-ossp";

CREATE TABLE users
(

    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password numeric(50),
    country VARCHAR(30),
    phone numeric(30)


);

DROP TABLE if exists products;

CREATE TABLE products
(
    id SERIAL PRIMARY KEY,
    image VARCHAR(500),
    title VARCHAR(120) NOT NULL,
    price numeric (100),
    company VARCHAR (50),
    incart BOOLEAN NOT NULL,
    description VARCHAR(500),
    category VARCHAR(80)

);



