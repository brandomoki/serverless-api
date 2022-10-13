const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  gender: String,
  age: Number,
});

const peopleModel = dynamoose.model('lab-18-bp', peopleSchema);


exports.handler = async (event) => {

  console.log('Posting---------', event.body);

  let parsedBody = JSON.parse(event.body);
  let { id, name, gender, age } = parsedBody;

  let people = { id, name, gender, age };
  console.log('Posted-------', people);

  const response = { statusCode: null, body: null };

  try {
    let newPeople = await peopleModel.update(people);
    response.statusCode = 200;
    response.body = JSON.stringify(newPeople);


  } catch (error) {

    console.log(error);

    response.statusCode = 500;
    response.body = JSON.stringify(error.message);
  }
  return response;
};
