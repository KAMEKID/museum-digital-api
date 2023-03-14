const museumController = require('../controllers/museum');
const router = require('express').Router();

router.get('/', museumController.getAll);
router.post('/', museumController.create);
router.get('/id:id', museumController.getById);
router.put('/:id', museumController.update);
router.delete('/:id', museumController.delete);

module.exports = router;