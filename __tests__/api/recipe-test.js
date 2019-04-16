const frisby = require('frisby');

const Joi = frisby.Joi;

it('should return a status of 404 when attempting to get a recipe that doesnt exist',()=>{
    return frisby
    .get('http://localhost:8001/api/recipes/-1')
    .expect('status',404);
});

it('should return a status of 200 when attempting to get a recipe that does exist',()=>{
    return frisby
    .get('http://localhost:8001/api/recipes/10')
    .expect('status',200);
});

it('should return a status of 200 when attempting to get all recipes of an existing food type',()=>{
    return frisby
    .get('http://localhost:8001/api/recipes/foodType/Entree')
    .expect('status',200)
});

it('should return a status of 404 when attempting to get all recipes of an non-existing food type',()=>{
    return frisby
    .get('http://localhost:8001/api/recipes/foodType/NonFoodType')
    .expect('status',404)
});

it('should return a status of 404 when attempting to delete a recipe that doesnt exist',()=>{
    return frisby
    .delete('http://localhost:8001/api/recipes/-1')
    .expect('status',404);
});

it('should return a status of 204 when attempting to delete a recipe that does exist',()=>{
    return frisby
    .delete('http://localhost:8001/api/recipes/10')
    .expect('status',204);
});
