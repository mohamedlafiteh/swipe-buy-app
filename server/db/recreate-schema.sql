
DROP TABLE if exists users;

create EXTENSION
if not exists "uuid-ossp";

CREATE TABLE users
(

    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(30) NOT NULL,
    email VARCHAR(120) NOT NULL,
    password VARCHAR(120),
    city VARCHAR(30)


);

DROP TABLE if exists products;

CREATE TABLE products
(
    id SERIAL PRIMARY KEY,
    picture bytea,
    title VARCHAR(120) NOT NULL,
    price numeric ,
    description VARCHAR(30)
);


