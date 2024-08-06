const MainCategoryService = require('../services/mainCategoryService');

const MainCategoryController = {
  getAllMainCategories: async (req, res) => {
    try {
      const result = await MainCategoryService.getAllMainCategory();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = MainCategoryController;
