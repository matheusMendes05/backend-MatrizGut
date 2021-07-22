const assignment = require('../models/Assignment');

module.exports = {

    async index(req, res) {

        const tasks = await assignment.find({}).sort({ priority: -1 });

        if (await tasks == '') {
            return res.status(200).send({ message: "there is no record in the database" });
        }

        return res.status(201).send({ tasks });

    },

    async create(req, res) {
        const assignments = req.body;

        let gravity = parseInt(assignments.gravity);
        let urgency = parseInt(assignments.urgency);
        let trend = parseInt(assignments.trend);

        let priority = (gravity * urgency * trend);
        let status = assignments.status;

        if (await !status) {
            let tasks = {
                "assignment": assignments.assignment,
                "gravity": gravity,
                "urgency": urgency,
                "trend": trend,
                "priority": priority,
                "status": false
            };
            try {
                const create_tasks = await assignment.create(tasks);

                if (create_tasks)
                    return res.status(200).send({ message: tasks });

            } catch (error) {
                return res.status(400).send({ error: error });
            }

        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const search = assignment.findById({ _id: id }).catch(error => {
                console.log('invalid ID')
            });

            if (!search) {
                return res.status(400).send({ message: "Record not Exist in Data Base" });

            } else {
                await assignment.deleteOne({ _id: id });
                return res.status(200).send({ message: "Task deleted Successfully" });
            }


        } catch (error) {
            return res.status(400).send({ error: "error" });
        }
    }

}