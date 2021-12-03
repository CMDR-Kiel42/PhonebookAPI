# PhonebookAPI
The Phonebook API challenge for Chalkboard

## Frameworks/libraries used
- Express
- Mongoose
- Passport
- bcryptjs
- jest

## Requirements
The server needs a local instance of MongoDB running on port 27017.

## Install
Open a terminal inside the project folder and run:
```
npm install
```
This will put everything in place.

## Schemas
Data is sent and received in JSON format.
User :
```
{
  "username": "username", // required
  "password": "password"  // required
}
```

Contact :
```
{
  "name": "name", // required
  "email": "email"  ,
  "phone" : {
      "home": "0123456",    // At least one phone number must be given
      "work": "0123456",
      "mobile": "0123456",
      "other": "0123456"
  },
  "address": {  // Optional, but all field must be filled if an address is given
      "street": "3 circle street",
      "postalCode": "1234",
      "country": "Belgium"
  },
  "userId": "abc123fgh" // required
}
```

## Running
Open a terminal inside the project folder and run:
```
node server
```
## Routes
- /api/users
    - POST : Create user. 
    - GET : List all users
- /api/contacts
    - POST : Create contact with authenticated user
    - GET : List all contacts belonging to authenticated user
- /api/contacts/:contact_id
    - GET : Returns contact with id 'contact_id'
    - PUT : Update contact with id 'contact_id'
    - DELETE : Delete contact with id 'contact_id'

## Unit tests
mongodb-memory-server is used to avoid connecting to a real instance of MongoDB for unit tests.
Open a terminal inside the project folder and run:
```
npm test
```

## Technical choices
I decided to go with MongoDB to take advantage of its flexibility. Who knows what kind of information we'll want to add to our contacts in the future! The fact that it's a NoSQL database allows us to come back to the schemas and change them accordingly.

I used Express to set up the routes as it is widely used and documented. It's also pretty quick to set up.

For the unit tests, I went with Jest because I wanted to unit test my routes, and it seems to be the "go-to" choice when using Express (I didn't have the time unfortunatley).

Finally, I used Passport for the user authentication because it's easy to set up basic authentication system with it.


## What might I do differently, had I more time
First I would add more unit tests to the project.

I would also set up a better authentication method (with OAuth2 for instance).

When I linked the contacts to their user, I added a reference to User in Contact. It seemed a bit easier and faster to do it that way at the moment, but I'd prefer to have a collection of contacts in User, as I think it makes more sense. The logic behind the 'get' routes would be easier as it would just return the collection of the user, instead of filtering of the userId field in Contact.
