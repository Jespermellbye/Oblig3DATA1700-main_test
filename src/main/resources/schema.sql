CREATE TABLE Tickets
(
    id              INT AUTO_INCREMENT NOT NULL,
    movie           varchar(255) NOT NULL,
    numberOfTickets INT NOT NULL,
    fname           varchar(255) NOT NULL,
    lname           varchar(255) NOT NULL,
    email           varchar(255) NOT NULL,
    phone           INT NOT NULL,
    PRIMARY KEY (lname)
);