create database policia;
use policia;

create table policiais (
    id int primary key auto_increment not null,
    rg_civil varchar(20) not null unique,
    rg_militar varchar(20) not null unique,
    cpf varchar(14) not null unique,
    data_nascimento date not null,
    matricula varchar(255) not null
);