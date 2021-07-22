module.exports = {

    async check(req, res, next) {
        const assignments = req.body;

        if (assignments.gravity <= 0 || assignments.gravity > 5) {
            return res.send({ error_gravity: "value must be between 1 and 5" });
        }
        if (assignments.urgency <= 0 || assignments.urgency > 5) {
            return res.send({ error_urgency: "value must be between 1 and 5" });
        }
        if (assignments.trend <= 0 || assignments.trend > 5) {
            return res.send({ error_trend: "value must be between 1 and 5" });
        }

        // check status

        next();

    }

}