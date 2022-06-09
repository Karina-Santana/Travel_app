CREATE DATABASE travel_app;
\c travel_app

CREATE TABLE trips(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    name TEXT,
    start_date TEXT,
    end_date TEXT,
    image_url TEXT
);

CREATE TABLE itineraries(
    id SERIAL PRIMARY KEY,
    trip_id INTEGER,
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

SELECT trips.id AS trips_id, trips.name, itineraries.start_location FROM itineraries INNER JOIN trips ON trips.id = itineraries.trip_id;

SELECT users.id AS user_id, trips.id, trips.user_id, trips.name, trips.start_date, trips.end_date FROM trips INNER JOIN users ON users.id = trips.user_id;