const express= require('express');
const router= express.Router();
const controller= require('../controllers/policialController');

router.post('/policiais', controller.createPolicial);
router.get('/policiais', controller.listarPoliciais);

module.exports= router;