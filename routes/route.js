const express = require('express');
const mainContoller = require('../controllers/main')
const router = express.Router();



router.get('/',mainContoller.mainGet)
router.post('/linkPosted',mainContoller.LinkPosted)
router.get('/results',mainContoller.results)

module.exports=router;