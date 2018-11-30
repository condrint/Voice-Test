// ./express-server/routes/todo.server.route.js
const express = require('express');

// get an instance of express router
const router = express();

var start = true;

router.post('/join', (req, res) => {
    let temp = start;
    start = false;
    return res.status(200).json({
        isInitator: temp
    })
});
router.post('/leave', {});

module.exports = router;
