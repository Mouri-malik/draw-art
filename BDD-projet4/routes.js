const express = require('express');
const models = require("./models");

// les routes seront créées avec un routers
const router = express.Router();


router.get("/", (req, res) => {res.send("Hello")});

// création d'un user
router.post("/user/signup", (req, res) => {
  console.log(JSON.stringify(req.body));
    let result = models.createUser(JSON.stringify(req.body));
    result.then(result => res.send(JSON.stringify(result))).catch(error => res.end(JSON.stringify(error)))
});

// listing d'un user
router.get("/users", (req, res) => { //Route users
    let result_promise = models.listUsers(req.body);//
    //console.log("result_promise" + result_promise);
    return result_promise.then(result => res.send(result))//exécute la requête. Then affiche le résultat. Then c'est comme une callback
});

router.get("/publications", (req, res) => { //Route publications
    let result_promise = models.listPublications(req.body);
    return result_promise.then(result => res.send(result))
});

module.exports = router;
