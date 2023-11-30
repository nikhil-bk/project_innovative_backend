
const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');



// register
router.post('/register',userCtrl.registerUser)

// login
router.post('/login', userCtrl.loginUser)

 // verify
router.get('/verify' ,userCtrl.verifiedToken )

 module.exports = router;
