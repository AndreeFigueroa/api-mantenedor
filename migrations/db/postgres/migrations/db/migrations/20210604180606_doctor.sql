-- migrate:up
create table doctor(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR,
    lastname VARCHAR,
    email VARCHAR,
    address VARCHAR,
    gender varchar,
    specialty varchar,
    birthdate varchar,
    id_branch INT,
    password varchar,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP,
    FOREIGN KEY (id_branch) REFERENCES branch(id)
)

-- migrate:down

drop table doctor;
