const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('ingredient',{
    id:{
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    RecipeId:{
        field:'RecipeId',
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                msg: "Recipe ID is required"
            }
        }
    },
    Name:{
        field:'Name',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Name is required"
            }
        }
    },
    Amount:{
        field:'Amount',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Amount is required"
            }
        }
    },
},{
    timestamps  : true,
    underscored : true
});
