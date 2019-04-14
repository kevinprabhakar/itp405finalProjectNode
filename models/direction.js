const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('direction', {
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
    StepNum:{
        field:'StepNum',
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                msg: "Step Number is required"
            }
        }
    },
    Direction:{
        field:'Direction',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Direction is required"
            }
        }
    },
    
},{
    timestamps  : true,
    underscored : true
});
