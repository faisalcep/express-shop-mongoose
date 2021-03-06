const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');
const userController = require('../controllers/user.controller');

/* GET users listing. */
router.post('/', shopController.create);
router.get('/', shopController.getAll);
router.get('/:id', shopController.getById);
router.put('/:id', shopController.updateById);
router.delete('/:id', shopController.deleteById);

// router.post('/', userController.isAuthenticated, shopController.create);
// router.put('/:id', userController.isAuthenticated, shopController.updateById);
// router.delete('/:id', userController.isAuthenticated, shopController.deleteById);

module.exports = router;


