const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Proposal = sequelize.define('proposal', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, minLength: 2 },
    email: { type: DataTypes.STRING, unique: true },
    text: { type: DataTypes.STRING, minLength: 5 }
});

module.exports = {
    Proposal
}