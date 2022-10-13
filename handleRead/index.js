
const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  gender: String,
  age: Number,
});

const peopleModel = dynamoose.model('lab-18-bp', peopleSchema);


exports.handler = async (event) => {
    // TODO implement
    
    console.log('proof of life-----------', event.queryStringParameters);

    const response = { statusCode: null, body: null};

    try {
      let peopleRecords = await peopleModel.scan().exec();
      response.statusCode = 200;
      response.body = JSON.stringify(friendRecords);

    } catch (error) {
      console.log(error);
      response.statusCode = 500;
      response.body = JSON.stringify(error.message);
    }

   
    return response;
};
