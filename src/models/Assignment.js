const mongoose = require('../database/connection');

const AssignmentSchema = new mongoose.Schema({

    assignment: {
        type: String,
        require: true
    },
    gravity: {
        type: Number,
        require: true
    },
    urgency: {
        type: Number,
        require: true
    },
    trend: {
        type: Number,
        require: true
    },
    priority: {
        type: Number,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    }
});

const Assignment = mongoose.model('Assignment', AssignmentSchema);
module.exports = Assignment;
