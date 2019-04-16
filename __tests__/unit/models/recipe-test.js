const { expect } = require('chai');
const Recipe = require('./../../../models/recipe');

describe('recipe', ()=>{
    it('should throw error when recipe title does not exist', async () => {
        try{
            let recipe = new Recipe({
                FoodType:"Entree",
                Calories:35,
                Fat:24,
                Cholesterol:45,
                Sugar:32,
                Protein:56,
                Sodium:89,
                Carbs:45,
                UserId:1
            });
            await recipe.validate();
        }catch(error){
            expect(error.errors[0].message).to.equal('Title is required');
        }
    });

    it('should throw error when recipe fat amount does not exist', async () => {
        try{
            let recipe = new Recipe({
                Title:"Keto Lemon Bars",
                FoodType:"Entree",
                Calories:35,
                Cholesterol:45,
                Sugar:32,
                Protein:56,
                Sodium:89,
                Carbs:45,
                UserId:1
            });
            await recipe.validate();
        }catch(error){
            expect(error.errors[0].message).to.equal('Fat is required');
        }
    });

    it('should throw error when recipe fat amount is not numeric', async () => {
        try{
            let recipe = new Recipe({
                Title:"Keto Lemon Bars",
                FoodType:"Entree",
                Calories:35,
                Cholesterol:45,
                Fat:"34",
                Sugar:32,
                Protein:56,
                Sodium:89,
                Carbs:45,
                UserId:1
            });
            await recipe.validate();
        }catch(error){
            expect(error.errors[0].message).to.equal('Fat must be numeric');
        }
    });




});
