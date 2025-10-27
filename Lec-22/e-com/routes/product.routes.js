const router = require("express").Router();
const controller = require("../controllers/product.controller");
const { isAuthenticated, isSeller } = require("../middlewares/auth");
const { validateRequest } = require("../middlewares/validateRequest");
const createProductScheam = require("../schema/products/create.schema");
const updateProductScheam = require("../schema/products/update.schema");

router.get("/", controller.getAllProducts);
router.get("/:id", controller.getProduct);

router.post("/", 
  validateRequest(createProductScheam), 
  isAuthenticated, 
  isSeller,
  controller.createProduct
);

router.put("/:id",
  isAuthenticated,
  controller.updateProduct
);
router.delete("/:id", 
  isAuthenticated,
  controller.deleteProduct
);

module.exports = router;