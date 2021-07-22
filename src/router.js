const router = require('express').Router();
const Users = require('./controllers/UsersController');
const Assignment = require('./controllers/AssignmentController');
const ProfileAssignment = require('./controllers/ProfileAssignmentController');
const priority = require('./middleware/priority');
// Routes

router.get("/api/user", Users.index);

/**
 * Assignment
 */

// list all
router.get("/api/assignment", Assignment.index);
// creating assignment 
router.post("/api/assignment/create", priority.check, Assignment.create);
// delete assignment
router.delete("/api/assignment/delete/:id", Assignment.delete);

/**
 * Profile Assignment
 */

// task performed
router.put("/api/assignment/task/:id/performed", ProfileAssignment.taskPerformed);
// list all pending task
router.get("/api/assignment/all-pending-tasks", ProfileAssignment.pendingTask);
// list all performed tasks
router.get("/api/assignment/all-performed-tasks", ProfileAssignment.performedTasks);



module.exports = router;