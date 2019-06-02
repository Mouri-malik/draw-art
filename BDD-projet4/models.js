const knex = require('knex')(require('./knexfile').development);
const crypto = require("crypto");


function getUser(email) {
    return knex("User").where({email:email})
}

function randomString () {
  return crypto.randomBytes(4).toString('hex')
}

function saltHashPassword (password) {
  const salt = randomString();
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password);
  return {
    salt,
    hash: hash.digest('hex')
  }
}

/*
  `id` int(11) NOT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `mdp` varchar(100) DEFAULT NULL
 */
function createUser(data_JSON) {
    let data = JSON.parse(data_JSON);
    console.log(JSON.parse(data_JSON))
    console.log(`Add user ${data.mail}`);
    const { salt, hash } = saltHashPassword(data.mdp);
    data.password = hash;
    data.salt = salt;
    let user_data = {
        Pseudo:data.nom,
        Email:data.mail,
        mdp:data.mdp,
        salt:data.salt
    };
    return knex('Users').insert(user_data);
}

function createPublication(data){
  console.log(`Add publication ${data.Email}`);
  const { salt, hash } = saltHashPassword(data.mdp);
  data.password = hash;
  data.salt = salt;
  let user_data = {
      Id:data.id,
      id_categorie:data.id,
      dessin:data.dessin,
      Pseudo:data.Pseudo,
      titre:data.titre,
      date_post:data.date_post,
      nb_like:data.nb_like,
      nb_commentaire:data.commentaire,
      user_id:data.user_id
  };
  return knex('Publications').insert(user_data);
}

function createCommentaire(data){
}

function listUsers(data){//fonction table users
    return knex("Users").where(data)
}

function listPublications(data){ //Fonction table publication
    return knex("Publications").where(data)
}

module.exports = { //exporte les modules
    getUser,
    createUser,
    listUsers,
    listPublications
};
