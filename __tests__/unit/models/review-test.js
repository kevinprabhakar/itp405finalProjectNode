const { expect } = require('chai');
const Review = require('./../../../models/review');

describe('review', ()=>{
    it('should throw error when rating is greater than 5', async () => {
        try{
            let review = new Review({
                RecipeId: 1,
                UserId: 1,
                Title: "Test Review",
                Rating:6.5,
                Body:"This is the review body"
            });
            await review.validate();
        }catch(error){
            expect(error.errors[0].message).to.equal('Validation max on Rating failed');
        }
    });

    it('should throw error when review is missing body', async () =>{
        try{
            let review = new Review({
                RecipeId: 1,
                UserId: 1,
                Title: "Test Review",
                Rating:4.5,

            });
            await review.validate();
        }catch(error){
            expect(error.errors[0].message).to.equal('Review Body is required');
        }
    });


});
