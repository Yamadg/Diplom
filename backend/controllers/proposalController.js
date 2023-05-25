const { Proposal } = require("../models/models");
const jwt = require('jsonwebtoken')

const admin = (token) => {
  if (!token) {
    return false;
  }
  const user = jwt.verify(token, process.env.SECRET_KEY);
  return user.role;
};

class ProposalController {
  async create(req, res, next) {
    try {
      Proposal.create(res);
    } catch (err) {
      console.log(err);
    }
  }

  async getAll(req, res) {
    if(!admin()) {
        return res.status(401).json({message: 'Нет доступа!'})
    }
    return res.json(await Proposal.findAll());
  }

  async getById(req, res) {
    if(!admin()) {
        return res.status(401).json({message: 'Нет доступа!'})
    }
    const { id } = req.params;

    const item = await Proposal.findOne({
      where: { id },
    });
    return res.json(item);
  }

  async delete(req, res) {
    if(!admin()) {
        return res.status(401).json({message: 'Нет доступа!'})
    }
    const { id } = req.params;

    const item = await Proposal.destroy({ where: { id } });
    return res.json(item);
  }

  async update(req, res) {
    if(!admin()) {
        return res.status(401).json({message: 'Нет доступа!'})
    }
    return 1;
  }
}

module.exports = new ProposalController();