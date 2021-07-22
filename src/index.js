const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

app.use(router);

app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000");
});

