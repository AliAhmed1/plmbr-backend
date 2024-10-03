const SubCategoryService = require('../services/subCategoryService');

const SubCategoryController = {
  getBySubCategoryId: async (req, res) => {
    const { subCategoryId } = req.params;

    try {
      const subCategory = await SubCategoryService.getBySubCategoryId(subCategoryId);
      res.status(200).json(subCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getAllSubCategoriesByMainCategoryId: async (req, res) => {
    const { mainCategoryId } = req.params;

    try {
      const subCategories = await SubCategoryService.getAllSubCategoriesByMainCategoryId(mainCategoryId);
      res.status(200).json(subCategories);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  createSubCategory: async (req, res) => {
    const subCategoryData = req.body;

    try {
      const result = await SubCategoryService.createSubCategory(subCategoryData);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getAllSubCategories: async (req, res) => {
    const { Top } = req.query;
    const top = Top ? parseInt(Top, 10) : 10;

    try {
      const subCategories = await SubCategoryService.getAllSubCategories(top);
      res.status(200).json(subCategories);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = SubCategoryController;
