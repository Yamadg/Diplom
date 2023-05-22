const Router = require('express');
const router = new Router();
const ProposalController = require('../controllers/proposalController');

router.get('/', ProposalController.getAll);
router.get('/:id', ProposalController.getById);
router.post('/', ProposalController.create);
router.delete('/:id', ProposalController.delete);
router.patch('/:id', ProposalController.update);

module.exports = router;