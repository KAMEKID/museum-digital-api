const quizController = require("../controllers/quiz");
const router = require("express").Router();

router.post("/", quizController.create);
router.get("/", quizController.getAll);
router.get("/:id", quizController.findOne);
router.put("/:id", quizController.update);
router.delete("/:id", quizController.delete);
router.get("/category/:id", quizController.getByCategoryId);
router.get("/category/:categoryId/:id", quizController.getOneByCategoryId);
router.get("/category/", quizController.getAll);
router.get("/level/:id", quizController.getByLevelId);

module.exports = router;
