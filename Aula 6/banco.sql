create table usuarios(
    nome varchar(50),
    email varchar(100),
    idade int
);

insert into usuarios(nome, email, idade) values(
    "Sheila Driele",
    "email@teste.com",
    8
);

insert into usuarios(nome, email, idade) values(
    "Dandara Santos",
    "novoemail@teste.com",
    2
),(
    "Claudio Santos",
    "novoemail@teste.com",
    25
);

insert into usuarios(nome, email, idade) values(
    "Brenda Santos",
    "novo@teste.com",
    25
),(
    "Emilio Santos",
    "mail@teste.com",
    10
);

delete from usuarios where nome = "Brenda Santos";

update usuarios set nome = "Nome de Teste" where nome = "Claudio Santos";
