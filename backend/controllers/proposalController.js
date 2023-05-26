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
      const { name, email, message } = req.body;
      if(await Proposal.findOne({where: {email}})) {
        return res.status(409).json({message: 'Почта уже занята'})
      }
      const proposal = await Proposal.create({name, email, text: message});
      return res.status(200).json(proposal);
    } catch (err) {
      console.log(err);
      return res.json({message: err});
    }
  }

  async getAll(req, res) {
    const token = req.headers['authorization'];
    
    if(!admin(token)) {
        return res.status(401).json({message: 'Нет доступа!'})
    }
    return res.json(await Proposal.findAll());
  }

  async getById(req, res) {
    const token = req.headers['authorization'];
    if(!admin(token)) {
        return res.status(401).json({message: 'Нет доступа!'})
    }
    const { id } = req.params;

    const item = await Proposal.findOne({
      where: { id },
    });
    return res.json(item);
  }

  async delete(req, res) {
    const token = req.headers['authorization'];
    if(!admin(token)) {
        return res.status(401).json({message: 'Нет доступа!'})
    }
    const { id } = req.params;

    const item = await Proposal.destroy({ where: { id } });
    return res.json(item);
  }

  async update(req, res) {
    const token = req.headers['authorization'];
    if(!admin(token)) {
        return res.status(401).json({message: 'Нет доступа!'})
    }
    const { email, name, text } = req.body;
    const item = await Proposal.update({email, name, text}, {where: {id: req.body.id}})
    return res.json(item);
  }
}

module.exports = new ProposalController();