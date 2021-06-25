CREATE TABLE IF NOT EXISTS "schema_migrations" (version varchar(255) primary key);
CREATE TABLE patient (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
    created_at DATE,
    updated_at DATE
);
CREATE TABLE sqlite_sequence(name,seq);
-- Dbmate schema migrations
INSERT INTO "schema_migrations" (version) VALUES
  ('20210528150313');
