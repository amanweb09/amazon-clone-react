const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signupController');
const signinController = require('../controllers/signinController');

router.post('/signup', signupController().store);
router.post('/signin', signinController().issueAccess);

module.exports = router;