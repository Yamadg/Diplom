const { Proposal } = require('../models/models');

class ProposalController {
    async create(req, res, next) {
        try {

        } catch(err) {
            console.log(err)
        }
    }

    async getAll(req, res) {
        return res.json(await Proposal.findAll());
    }

    async getById(req, res) {
        const { id } = req.params;

        const item = await Proposal.findOne(
            {
                where: { id }
            }
        );
        return res.json(item);
    }

    async delete(req, res) {
        const { id } = req.params;
        
        const item = await Proposal.destroy({where: { id }});
        return res.json(item);
    }

    async update(req, res) {
        return 1;
    }
}

module.exports = new ProposalController();