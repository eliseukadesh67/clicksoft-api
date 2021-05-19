CREATE TABLE professors (
	professor_id serial PRIMARY KEY UNIQUE,
	nome VARCHAR ( 50 ) UNIQUE NOT NULL,
	email VARCHAR ( 50 ) NOT NULL,
	matricula VARCHAR ( 255 ) UNIQUE NOT NULL,
  nascimento VARCHAR ( 255 ) UNIQUE NOT NULL
);
CREATE TABLE salas (
  sala_id serial PRIMARY KEY,
  numero INTEGER UNIQUE,
  capacidade INTEGER,
  disponivel BOOLEAN
);
CREATE TABLE alunos (
	aluno_id serial PRIMARY KEY,
	nome VARCHAR ( 50 ) UNIQUE NOT NULL,
	email VARCHAR ( 50 ) NOT NULL,
	matricula VARCHAR ( 255 ) UNIQUE NOT NULL,
  nascimento VARCHAR ( 255 ) UNIQUE NOT NULL,
  sala INTEGER REFERENCES salas(numero)
);
