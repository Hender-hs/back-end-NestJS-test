# Cadastre.me API - Megazord Test

This project is a project built with Nest.js using SQL Database and TypeScript.

### Run the project

Configure the .env file, install the dependecies with `npm install` and then run `npm run start` or `npm run start:dev` in watch mode.
It also has the docker-compose file configured, but it's necessary to set up your database configuration.

#### API Routes  

<font size="7"> All routes are protected. It requires the access token in the authorization header </font>  

##### Access Token Route
###### Public
```http
GET /auth/get-access
```   

##### Person Routes
###### Private
```http
GET /person/all  
```  
```json
[
  {
    "id": "number",
    "name": "string",
    "cpf": "string",
    "contact": [
      {
        "id": "number",
        "type": "string",
        "description": "string"
      }
    ]
  }
]
```  

<br/>
 
```http
GET /person/:id  
```
```json
{
  "id": "number",
  "name": "string",
  "cpf": "string",
  "contact": [
    {
      "id": "number",
      "type": "string",
      "description": "string"
    }
  ]
}
```  

<br/>
 
```http
POST /person/create  
```  
```json
{
  "name": "string",
  "cpf": "string",
  "type": "string",
  "description": "string"
}
```  

<br/>
 
```http
PATCH /person/:id  
```  
```json
{
  "name": "string",
  "cpf": "string",
  "type": "string",
  "description": "string"
}
```  

<br/>
 
```http
DELETE /person/:id  
```  

##### Contact Routes 
###### Private
```http
GET /contact/all  
```
```json
[
  {
    "id": "number",
    "type": "string",
    "description": "string",
    "personId": "number"
  }
]
```  

<br/>
 
```http
GET /contact/:id
```  
```json
{
  "id": "number",
  "type": "string",
  "description": "string",
  "personId": "number"
}
```

<br/>
 
```http
POST /contact/create  
```  
```json
{
  "type": "string",
  "description": "string",
  "personId": "number"
}
```

<br/>
 
```http
PATCH /contact/:id  
```  
```json
{
  "type": "string",
  "description": "string",
  "personId": "number"
}
```

<br/>
 
```http
DELETE /contact/:id  
```  

<br/>

### TODOs:
Things that I believe it's good to finish:

*     Error Handling.  
*     Exclusive `contact type` table.  
*     Tables timestamps.  


### Bugs and Errors to Fix:
Erros and bugs found on:

*     "@nestjs/class-validator" lib. @ValidateIf not working properly and breaking the server when a value comes undefined.  
*     "@nestjs/jwt" breaks the application when provide a string to .sign() method of JwtService Class, which was supposted to work with a string JSON.  
