-- migrate:up
create table patient (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR,
    lastname VARCHAR,
    email VARCHAR,
    address VARCHAR,
    gender varchar,
    birthdate varchar,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP
);

-- migrate:down

drop table patient;
