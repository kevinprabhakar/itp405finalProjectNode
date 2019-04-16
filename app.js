const express = require('express');
const Sequelize = require('sequelize');
const Review = require('./models/review');
const Recipe = require('./models/recipe');

const Ingredient = require('./models/ingredient');
const Direction = require('./models/direction');

const bodyParser = require('body-parser');

const app = express();
const { Op } = Sequelize;

app.use(bodyParser.json());

Recipe.hasMany(Ingredient,{
    foreignKey:'RecipeId'
});

Recipe.hasMany(Direction,{
    foreignKey:'RecipeId'
});

Ingredient.belongsTo(Recipe,{
    foreignKey:'RecipeId'
});

Direction.belongsTo(Recipe,{
    foreignKey:'RecipeId'
});

//Create new review
app.post('/api/reviews/:recipeId', function(request, response){
    let RecipeId = parseInt(request.params.recipeId);

    Recipe
    .findByPk(RecipeId)
    .then((recipe)=>{
        if (recipe){
            Review.create({
                RecipeId: RecipeId,
                UserId: request.body.userId,
                Title: request.body.title,
                Rating: request.body.rating,
                Body: request.body.message
            }).then((review) => {
                response.status(200).json(review);
            }, (validation)=>{
                response.status(422).json({
                    errors: validation.errors.map((error) => {
                        return {
                            attribute: error.path,
                            message: error.message
                        }
                    })
                });
            });
        }else{
            response.status(404).send();
        }
    })


});

//Update old review
app.patch('/api/reviews/:reviewId', function(request, response){
    let reviewId = parseInt(request.params.reviewId);

    updateParams = {};

    if (request.body.title){
        updateParams["Title"] = request.body.title;
    }
    if (request.body.rating){
        updateParams["Rating"] = request.body.rating;
    }
    if (request.body.message){
        updateParams["Body"] = request.body.body;
    }

    Review.update(updateParams,{
        where:{
            id: reviewId
        },
    }).then(function() {
        Review.findByPk(reviewId).then((review) => {
            if (review){
                response.status(200).json(review);
            }else{
                response.status(404).send();
            }
        })
    }).catch(function(validation){
        response.status(422).json({
            errors: validation.errors.map((error) => {
                return {
                    attribute: error.path,
                    message: error.message
                }
            })
        });
    });
});

//Get recipe
app.get('/api/recipes/:recipeId', function(request, response){
    let id = parseInt(request.params.recipeId);

    Recipe.findByPk(id, {
        include: [Ingredient, Direction]
    }).then((recipe)=>{
        if (recipe) {
            response.status(200).json(recipe);
        } else {
            response.status(404).send();
        }
    });
});

//Get recipes of certain food type
app.get('/api/recipes/foodType/:foodType', function(request, response){
    let foodType = request.params.foodType;

    filter = {
        where: {
            FoodType: {
                [Op.like]: `${foodType}%`
            }
        }
    };

    Recipe.findAll({
        where: {
            FoodType: {
                [Op.like]: `${foodType}%`
            }
        },
        include: [Ingredient, Direction]
    }).then((recipes) => {
        if (!recipes || recipes.length === 0){
            response.status(404).send();
        }else{
            response.status(200).json(recipes);

        }
    });
});

//Delete a recipe
app.delete('/api/recipes/:recipeId', function(request, response){
    let id = request.params.recipeId;

    Recipe
    .findByPk(id)
    .then(async (recipe)=>{
        if (recipe){
            await Ingredient.destroy({where:{RecipeId:recipe.id}});
            await Direction.destroy({where:{RecipeId:recipe.id}});
            await Review.destroy({where:{RecipeId:recipe.id}});
            await recipe.destroy();
        }else{
            return Promise.reject();
        }
    })
    .then(() => {
        response.status(204).send();
    }, () => {
        response.status(404).send();
    });
})

app.listen(process.env.PORT || 8000);
