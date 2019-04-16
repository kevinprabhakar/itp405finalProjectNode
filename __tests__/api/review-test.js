const frisby = require('frisby');

const Joi = frisby.Joi;

it('should return a status of 200 when attempting to create a new review',()=>{
    return frisby
    .post('http://localhost:8000/api/reviews/13',{
        userId:1,
        title: 'This dish tasted so good!',
        rating: 3.65,
        message: 'I have only tasted a dish like this once in my life. I can now die happy'
    })
    .inspectJSON()
    .expect('status',200);
});


it('should return a status of 404 when attempting to create a new review for a recipe that doesnt exist',()=>{
    return frisby
    .post('http://localhost:8000/api/reviews/-1',{
        userId:1,
        title: 'This dish tasted so good!',
        rating: 3.65,
        message: 'I have only tasted a dish like this once in my life. I can now die happy'
    })
    .inspectJSON()
    .expect('status',404);
});

it('should return a status of 200 when an existing review is updated',()=>{
    return frisby.
    patch('http://localhost:8000/api/reviews/1',{
        title:"a",
        rating:1,
        message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    })
    .inspectJSON()
    .expect('status',200);
});

it('should return a status of 404 when an non-existing review is updated',()=>{
    return frisby.
    patch('http://localhost:8000/api/reviews/-11',{
        title:"a",
        rating:1,
        message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    })
    .inspectJSON()
    .expect('status',404);
});
