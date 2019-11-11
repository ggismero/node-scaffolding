const router = require('express').Router();
const Task = require('../../../models/task');

router.get('/', (req, res, next) => {
    Task.getAllTasks()
        .then(tasks => {
            res.render('to-do-list', {
                tasks,
            });
        })
        .catch(err => {
            next(err);
        });
});

module.exports = router;