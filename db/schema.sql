CREATE DATABASE travel_app;
\c travel_app

CREATE TABLE trips(
    id SERIAL PRIMARY KEY,
    name TEXT,
    start_date TEXT,
    end_date TEXT
);

CREATE TABLE itineraries(
    id SERIAL PRIMARY KEY,
    start_location TEXT,
    end_location TEXT,
    start_date TEXT,
    end_date TEXT,
    start_time TEXT,
    end_time TEXT,
    activities TEXT, 
    notes TEXT, 
    checklist TEXT
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);