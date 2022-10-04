CREATE DATABASE bccr_email;
CREATE TABLE signed_up (
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) PRIMARY KEY NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

--Test data
INSERT INTO signed_up (firstname, lastname, email)
VALUES
("Katie", "Jackson", "Katie34@yahoo.com"),
("Tunde", "Swift", "Tunde@gmail.com");

SELECT * FROM signed_up ORDER BY created_at DESC LIMIT 1;