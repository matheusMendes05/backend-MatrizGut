const mongoose = require('mongoose');

// connection data base mongoose
mongoose.connect('mongodb://localhost:27017/Matriz-GUT', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conectado");
    }).catch((err) => {
        console.log("ERRO" + err);
    });
mongoose.Promise = global.Promise;

module.exports = mongoose;