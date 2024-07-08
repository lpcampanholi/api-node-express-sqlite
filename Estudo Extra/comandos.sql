SHOW DATABASES;

CREATE DATABASE sistemadecadastro;

USE sistemadecadastro;

SHOW TABLES;

CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nome VARCHAR(50),
  email VARCHAR(50),
  idade INT
);

DESCRIBE usuarios;

INSERT INTO usuarios (id, nome, email, idade) VALUES
(1, "José Andrade", "jsandrade@mail.com", 48),
(2, "André Lima", "andrislima@mail.com", 28),
(3, "Ana Beatriz", "anabeatrizinspetora@mail.com", 32),
(4, "Inácio Souza", "inaciosouzacunha@mail.com", 14),
(5, "Enzo Almeida", "enzoalmeida@mail.com", 12);

SELECT * FROM usuarios;