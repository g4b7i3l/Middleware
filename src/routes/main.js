const express = require('express');
const router = express.Router();
const {index,admin,login,register,products,detail} = require('../controllers/mainController')
const acces = require('../middleware/permisos')



router.get('/',index)
router.get('/admin',acces,admin)

module.exports = router;