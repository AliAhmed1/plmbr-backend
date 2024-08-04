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
};

module.exports = SubCategoryController;
