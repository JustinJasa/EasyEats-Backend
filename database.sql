CREATE DATABASE easy_eats;

USE easy_eats;

CREATE TABLE recipes (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    contents TEXT NOT NULL, 
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE users (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    contents TEXT NOT NULL, 
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE category (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    contents TEXT NOT NULL, 
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE comments (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    contents TEXT NOT NULL, 
    created TIMESTAMP NOT NULL DEFAULT NOW()
);


INSERT INTO recipes (title, contents)
VALUES
('Chicken Fajitas', 'Yummy chicken Fagitas'),
('Chicken Tacos', 'Yummy chicken Tacos');
