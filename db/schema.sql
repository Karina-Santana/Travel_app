CREATE DATABASE travel_app;
\c travel_app

CREATE TABLE trips(
    id SERIAL PRIMARY KEY,
    name TEXT,
    date TEXT,
    time TEXT,
    location TEXT,
    travel_info TEXT
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);