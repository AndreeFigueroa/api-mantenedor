-- migrate:up
create table branch (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    address varchar
);

-- migrate:down

drop table branch;