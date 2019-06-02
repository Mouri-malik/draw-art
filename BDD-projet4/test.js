
const knex = require('knex')({
    client: 'mysql',
    connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "Reseau_social"
    }
});

knex.select("*").from('Users').then(result => console.log(result));

knex.select("*").from('Publication').then(result => console.log(result));
