## Social Network API

## Description
This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The API is built using Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents
Installation
Usage
Routes
Technologies
Credits
License

## Installation
Clone the repository to your local machine.
Install the required dependencies using the following command:
Copy code
npm install
Start the server using the following command:
sql
Copy code
npm start

## Usage
This API can be used to create, read, update, and delete users and their thoughts, as well as add and remove friends.

## Routes
The following routes are available:

~GET all users: /api/users~
GET a single user by id: api/users/:id
PUT update a user by id: api/users/:id
DELETE a user by id: api/users/:id
POST add a new friend: /api/users/:userId/friends/:friendId
DELETE remove a friend: /api/users/:userId/friends/:friendId

## Technologies
Express.js
MongoDB
Mongoose ODM

Credits
This project was completed by Amish Sharma as part of a homework assignment for the Full-Stack Web Development Bootcamp at Washington University in St.Louis.

License
This project is licensed under the MIT license.