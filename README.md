# serverless-api

## Author

Brandon Pitts

## Deployed Site

[Deployed Site](https://d9j8svr1u4.execute-api.us-west-1.amazonaws.com/Lab-18-bp/people)

## Functionality

- Using DynamoDB we first created a database, with a specified ID as the partition key
- We then added an item to the database as a means of establishing structure.
- From here, we established a REST API in API Gateway, establishing /people as the endpoint, and effectively creating a routing system
- In order to establish functionality, permissions were established in Lambda, and functions for standard CRUD operations were written
- In order to access our code, it was necessary to write it out in our editor, zip the files and upload them onto our Lambda code base
- We were able to test the linked routes and functions in API Gateway console
- Each method has its own console to insert the necessary JSON data in order to test the specific function. (Structured as below with our established schema)

```JSON
{
    "id": "1",
    "name": "Brando",
    "gender": "Male",
    "age": 32,
}
```


## Credits and Collaborators

Demo code, Stephanie Hill , Keelen Fisher, Tyler main, Luis Rosales

