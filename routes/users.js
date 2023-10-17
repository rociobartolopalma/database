const {Router} = require('express');
const{usersList, listUserByID, addUser} = require('../controllers/users');
const router = Router();
// http://localhost:3000/api/v1/users/
router.get('/', usersList);
router.get('/:id', listUserByID);
router.put('/', addUser);

module.exports = router;