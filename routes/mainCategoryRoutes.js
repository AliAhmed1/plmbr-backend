const express = require('express');
const MainCategoryController = require('../controllers/mainCategoryController');
const router = express.Router();

router.get('/maincategories', MainCategoryController.getAllMainCategories);
router.get('/gettopmaincategories', MainCategoryController.getTopMainCategories);

module.exports = router;
