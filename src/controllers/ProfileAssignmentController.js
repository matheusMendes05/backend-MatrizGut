const assignment = require('../models/Assignment');

module.exports = {
    async taskPerformed(req, res) {
        try {
            const { id } = req.params;
            let messages;
            // check tasks dataBase
            const search = await assignment.findById({ _id: id }).catch(error => {
                console.log('invalid ID');
            });
            // updated
            const status = {
                "status": true
            }
            if (!search) {
                return res.status(400).send({ message: "Record not Exist in Data Base" });
            } else {
                await assignment.findByIdAndUpdate(search, status, {
                    new: true
                });
                return res.status(201).send({ message: "task successfully accomplished" });
            }

        } catch (error) {
            return res.status(400).send({ message: "Error" });

        }
    },

    async pendingTask(req, res) {
        try {
            const tasks = await assignment.find({ status: false }).sort({ priority: -1 });
            if (tasks == '') {
                return res.status(200).send({ message: "there is no record in the database" });
            }
            return res.status(201).send({ tasks });
        } catch (error) {
            return res.status(400).send({ message: "Error" });
        }
    },

    async performedTasks(req, res) {
        try {
            const tasks = await assignment.find({ status: true }).sort({ priority: -1 });

            if (tasks == '') {
                return res.status(200).send({ message: "there is no record in the database" });
            }
            return res.status(201).send({ tasks });
        } catch (error) {
            return res.status(400).send({ message: "Error" });
        }
    }

}