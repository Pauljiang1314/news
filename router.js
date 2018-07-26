const express = require('express');
const user = require('./controllers/user');

const router = express.Router();

router.get('/signin', user.showSignin)
        .post()
;


module.exports = router;