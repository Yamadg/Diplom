const Router = require('express')
const router = new Router()
const ProposalRouter = require('./proposalRouter');
const UserRouter = require('./userRouter')

router.use('/proposal', ProposalRouter);
router.use('/user', UserRouter);

module.exports = router;