const router = require("express").Router();
const controller = require("../controllers/product.controller");
const { validateRequest } = require("../middlewares/validateRequest");
const createProductScheam = require("../schema/products/create.schema");
const updateProductScheam = require("../schema/products/update.schema");

router.get("/", controller.getAllProducts);
router.get("/:id", controller.getProduct);
router.post("/", validateRequest(createProductScheam), controller.createProduct);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

module.exports = router;