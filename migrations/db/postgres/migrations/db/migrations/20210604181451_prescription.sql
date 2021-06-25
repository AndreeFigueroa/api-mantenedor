-- migrate:up
create table prescription(
    id SERIAL PRIMARY KEY,
    patient_name VARCHAR,
    patient_age INT,
    doctor_sign VARCHAR,
    rx VARCHAR,
    id_doctor INT,
    id_patient INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP,
    FOREIGN KEY (id_doctor) REFERENCES doctor(id),
    FOREIGN KEY (id_patient) REFERENCES patient(id)

)

-- migrate:down
drop table prescription;
