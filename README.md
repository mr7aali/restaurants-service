# User Creation API Documentation

## Overview
This API endpoint allows for the creation of a new user in the system. It accepts user details through a POST request and returns the created user data along with a status message.

## API Endpoint
**URL:** `http://localhost:5000/user/create`

**Method:** `POST`

## Request Data

Request body:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "123@gmail.com",
  "password": "123",
  "role": "user"
}

## Response Data

Request body:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "user created successfully!",
    "data": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "123@gmail.com",
        "password": "$2b$10$LevCL2FtJMf0Ketps.sa6.hDXjbjVneXwlvmQ8tdkvu.gGqz/xoAC",
        "role": "user",
        "_id": "66be600667920449d62aa327",
        "createdAt": "2024-08-15T20:07:34.889Z",
        "updatedAt": "2024-08-15T20:07:34.889Z",
        "__v": 0
    }
}

##BaseURL = http://localhost:5000/user/create
##endPoints 
      User: 
        1. user/create
        2. user/get
        3. user/get/:id
        4. user/update/:id
      foodCategory and foodItem :
        1. food-item/get/:id
        2. food-item/get-all
        3. food-item/create

        1. food-category/get/:id
        2. food-category/get-all
        3. food-category/create
      
     chatBot:
     1. /chatbot/reply