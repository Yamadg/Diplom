const Router = require('express')
const router = new Router()
const ProposalRouter = require('./proposalRouter');

router.use('/proposal', ProposalRouter);

module.exports = router;