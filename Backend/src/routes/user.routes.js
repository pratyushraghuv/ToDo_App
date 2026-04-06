const expess = require('express');
const {registerUser, loginUser, logoutUser} = require('../controllers/user.controller.js')

const router = expess.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

module.exports = router;