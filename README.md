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
