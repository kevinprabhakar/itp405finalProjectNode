const frisby = require('frisby');

const Joi = frisby.Joi;

it('should return a status of 404 when attempting to delete a recipe that doesnt exist',()=>{
    return frisby
    .delete('http://localhost:8001/api/recipes/-1')
    .expect('status',404);
});
