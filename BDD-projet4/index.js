const express = require("express");
const router = require("./routes");

const port = 9191;
const app = express();

// les échanges sont faits en JSON
const cors = (req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, X-Custom-Header, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if (req.method === "OPTIONS") {
        res.end();
    }
    else
    {
        next();
    }
};

app.use(cors);
app.use(express.json());

app.use("/api", router);

app.listen(port, () => console.log(`serveur en ecoute sur http://localhost:${port}`));
