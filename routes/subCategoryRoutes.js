const express = require('express');
const SubCategoryController = require('../controllers/subCategoryController');

const router = express.Router();

// Route to get subcategory by subcategory ID
router.get('/subcategories/:subCategoryId', SubCategoryController.getBySubCategoryId);

// Route to get all subcategories by main category ID
router.get('/maincategories/:mainCategoryId/subcategories', SubCategoryController.getAllSubCategoriesByMainCategoryId);


module.exports = router;
