# Cadastre.me API - Megazord Test

This project is a project built with Nest.js using SQL Database and TypeScript.

### Run the project

Configure the .env file, install the dependecies with `npm install` and then run `npm run start` or `npm run start:dev` in watch mode.
It also has the docker-compose file configured.

#### API Routes  

<font size="7"> All routes are protected. It requires the access token in the authorization header </font>  

##### Access Token Route
```http
GET /auth/get-access
```   

##### Person Routes
```http
GET /person/all  
```
```http
GET /person/:id  
```
```http
GET /person  
```
```http
POST /person/create  
```
```http
PATCH /person/:id  
```
```http
DELETE /person/:id  
```  

##### Contact Routes
```http
GET /contact/all  
```
```http
GET /contact/:id
```
```http
GET /contact  
```
```http
POST /contact/create  
```
```http
PATCH /contact/:id  
```
```http
DELETE /contact/:id  
```  
