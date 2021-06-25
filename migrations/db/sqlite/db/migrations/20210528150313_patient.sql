-- migrate:up
CREATE TABLE patient (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
    created_at DATE,
    updated_at DATE
);

-- migrate:down

drop table patient;
