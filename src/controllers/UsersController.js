
module.exports = {
    // List All Engineer
    async index(req, res) {

        let Users = {
            'name': "Matheus L. Mendes",
            'email': "matheus_mendes05@hotmail.com",
            'message': "Welcome"
        }

        return res.status(201).send({ Users });
    },
}