const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('recipe',{
    id:{
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Title:{
        field:'Title',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Title is required"
            }
        }
    },
    FoodType:{
        field:'FoodType',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Food Type is required"
            }
        }
    },
    Calories:{
        field:'Calories',
        type: Sequelize.FLOAT,
        validate: {
            isNumeric:{
                args: true,
                msg: "Calories must be numeric"
            },
            notEmpty: {
                msg: "Calories is required"
            }
        }
    },
    Fat:{
        field:'Fat',
        type: Sequelize.FLOAT,
        validate: {
            isNumeric:{
                args: true,
                msg: "Fat must be numeric"
            },
            notEmpty: {
                msg: "Fat is required"
            }
        }
    },
    Cholesterol:{
        field:'Cholesterol',
        type: Sequelize.FLOAT,
        validate: {
            isNumeric:{
                args: true,
                msg: "Cholesterol must be numeric"
            },
            notEmpty: {
                msg: "Cholesterol is required"
            }
        }
    },
    Sugar:{
        field:'Sugar',
        type: Sequelize.FLOAT,
        validate: {
            isNumeric:{
                args: true,
                msg: "Sugar must be numeric"
            },
            notEmpty: {
                msg: "Sugar is required"
            }
        }
    },
    Protein:{
        field:'Protein',
        type: Sequelize.FLOAT,
        validate: {
            isNumeric:{
                args: true,
                msg: "Protein must be numeric"
            },
            notEmpty: {
                msg: "Protein is required"
            }
        }
    },
    Sodium:{
        field:'Sodium',
        type: Sequelize.FLOAT,
        validate: {
            isNumeric:{
                args: true,
                msg: "Sodium must be numeric"
            },
            notEmpty: {
                msg: "Sodium is required"
            }
        }
    },
    Carbs:{
        field:'Carbs',
        type: Sequelize.FLOAT,
        validate: {
            isNumeric:{
                args: true,
                msg: "Carbs must be numeric"
            },
            notEmpty: {
                msg: "Carbs is required"
            }
        }
    },
    UserId:{
        field:'UserId',
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                msg: "User ID is required"
            }
        }
    },
},{
    timestamps  : true,
    underscored : true
});
