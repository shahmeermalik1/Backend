const express = require('express');
const { postShift, getShift } = require('../controllers/budgetControllers');

const router = express.Router();

router.post('/postshift', postShift);
router.get('/getshift', getShift);


module.exports = router;
