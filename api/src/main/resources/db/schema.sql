DROP TABLE IF EXISTS USERS;

CREATE TABLE USERS
(
    id              BIGINT AUTO_INCREMENT,
    name            VARCHAR(250) NOT NULL,
    surname         VARCHAR(250) NOT NULL,
    birth_date      DATE         NOT NULL,
    email           VARCHAR(500) NOT NULL,
    password        VARCHAR(500) NOT NULL,
    phone           VARCHAR(500) NOT NULL,
    identity        VARCHAR(500) NOT NULL,
    passport_number VARCHAR(500) NOT NULL,
    PRIMARY KEY (id, name, surname, phone)
);