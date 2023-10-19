// / Create an express router instance object?
const router = require('express').Router();
// const User = require('../models/User');

router.get('/', (req, res) => {
    res.render('landing');
})
// Export the router
module.exports = router;