# iyzico_node_api
Node js api development with Iyzico api.

# MongoDb Setup

Add your MongoDb string into .env file
Example

mongodb://localhost:27017/<your-db-name>
  
If you are not using 27017 port then replace with yours.

The model of test user
```
    {
        "_id": {
            "$oid": "6054fdeaace4c705c0a3e73a"
        },
        "firstName": "demo",
        "lastName": "demo",
        "email": "demo@demo.com",
        "createdAt": "2021-03-17T09:32:15.378Z",
        "updatedAt": "2021-03-17T09:32:15.450Z",
        "__v": 0,
        "password": "$2b$10$vd/trxkf6S8W05S7bFs08e7xJ6Tov1HZPCOXx9K5aIudJDU8jCTca"  
    }
// password: 123456
```
You can insert this json into mongodb.
