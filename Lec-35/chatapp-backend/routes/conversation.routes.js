const router = require("express").Router();
const controller = require("../controllers/conversation.controller");
const { auth } = require("../middlewares/auth");

router.get("/", auth, controller.getAll);
router.post("/", auth, controller.getOrCreate);

module.exports = router;