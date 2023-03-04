## Social Network API
This is an API for a social networking web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents
Installation
Usage
Routes
Technologies Used
Contributing
License
Installation
To use this API, you'll need to have Node.js and MongoDB installed on your computer. Once you've cloned this repository, navigate to the root directory in your terminal and run the following command to install the necessary dependencies:

## Copy code
npm install
Usage
To start the API, run the following command:

## sql
Copy code
npm start
This will start the server on http://localhost:3001.

You can then use a tool like Insomnia or Postman to test the API routes.

## Routes
The following routes are available:

GET /api/users: get all users
GET /api/users/:id: get a single user by ID
POST /api/users: create a new user
PUT /api/users/:id: update a user by ID
DELETE /api/users/:id: delete a user by ID
POST /api/users/:userId/friends/:friendId: add a friend to a user's friend list
DELETE /api/users/:userId/friends/:friendId: remove a friend from a user's friend list
GET /api/thoughts: get all thoughts
GET /api/thoughts/:id: get a single thought by ID
POST /api/thoughts: create a new thought
PUT /api/thoughts/:id: update a thought by ID
DELETE /api/thoughts/:id: delete a thought by ID
POST /api/thoughts/:thoughtId/reactions: add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: remove a reaction from a thought

## Technologies Used
This API uses the following technologies:

Node.js
Express.js
MongoDB
Mongoose ODM

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the ISC License.
