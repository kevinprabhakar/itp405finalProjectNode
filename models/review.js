const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('review', {
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
            },
            isNumeric:{
                args:true,
                msg: "Recipe Id must be Numeric"
            }
        }
    },
    UserId:{
        field:'UserId',
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                msg: "User ID is required"
            },
            isNumeric:{
                args:true,
                msg: "Recipe Id must be Numeric"
            }
        }
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
    Rating:{
        field:'AverageRating',
        type: Sequelize.FLOAT,
        validate: {
            isNumeric:{
                args: true,
                msg: "Rating must be numeric"
            },
            min:0,
            max:5,
            notEmpty:{
                msg:"Review Rating is required"
            }
        }
    },
    Body:{
        field:'Body',
        type: Sequelize.STRING,
        validate: {
            notEmpty:{
                msg:"Review Body is required"
            },
        }
    },
},{
    timestamps  : true,
    underscored : true
});
