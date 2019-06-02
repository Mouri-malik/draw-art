/*Création de la table Users*/

CREATE TABLE User(

 Id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
 Pseudo VARCHAR(50) UNIQUE NOT NULL,
 Email VARCHAR(50) UNIQUE NOT NULL,
 MDP VARCHAR(250) NULL
);

/*création de la table Publication*/
CREATE TABLE Publications(
  id_Publication INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  id_categorie INT,
  dessin VARCHAR(100),
  Pseudo VARCHAR (100) UNIQUE,
  titre VARCHAR(100),
  Date_post DATETIME,
  nb_like INT,
  nb_comment INT,
  Users_id INT(10)
);


CREATE TABLE Commentaire(
  id_Commentaire INT PRIMARY KEY AUTO_INCREMENT,
  id_Publication INT,
  pseudo VARCHAR(100) UNIQUE,
  commentaire_date DATETIME,
  id_Users INT(10)
);

CREATE TABLE Catégorie(
  id_Publication INT,
  categorie_dessin VARCHAR(250),
  Users_id INT(10)
);

INSERT INTO User VALUES (1, "Gutz", "guts13@hotmail.fr", "password");
INSERT INTO Publications(id_categorie, dessin, Pseudo, titre, Date_post, nb_like, nb_comment) VALUES ('categori', 'dessin', 'pseudo', 'titre de l\'oeuvre', 'date du post', 'nombre de like', 'nombre de commentaires');
INSERT INTO Commentaire VALUES("caska", '000-00-00 00:00:00');
INSERT INTO Catégorie VALUES("categorie de dessin");
