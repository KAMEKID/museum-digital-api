const categoryController = require("../controllers/category");
const router = require("express").Router();

router.get("/", categoryController.getAll);
router.post("/", categoryController.create);
router.get("/:id", categoryController.findOne);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.delete);

module.exports = router;
