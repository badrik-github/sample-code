<h1 align="center">
  	<span>code-testing</span>
</h1>

---

## Requirements

-   Node.Js version v12.18.0 or higher. See [here](https://nodejs.org/en/download/) for install instructions.
-   NPM version 6.14.4 or higher. See [here](https://www.npmjs.com/get-npm) for install instructions.
-   Postman for API Testing. See [here](https://www.postman.com/downloads/) for downloading postman.
-   Mongo DB for the database. See [here](https://www.mongodb.com/try/download/community) for downloading.

## Installation



-   install all modules

    ```sh
    npm install
    ```
    ```sh
    npm install --force
    ```
    

## start application

-   If you want to start application

    ```sh
    npm start
    ```

### API Endpoints

-  All apis are as follow

    http://localhost:8000/api/{endpoint}


### Swagger documentation

-  All apis are documented with swagger

    http://localhost:8000/api-docs


## ENV configuration

```sh
APPLICATION_PORT = 8000
ACCESS_SECRET = dbc9c97a-f895-4c40-a16a-6248e3e6360b
REFRESS_SECRET = 2c82f26e-c49e-5716-899d-159bf49261bb
FORGETPASSWORD_EMAIL=2c82f26e-c49e-5716-a16a-6248e3e6360b

ADMIN_ACCESS_SECRET = 5c129e84-0e24-42a9-b5dd-be5c0d074ad6
ADMIN_REFRESS_SECRET = 28f51783-1e9c-4f29-a5ac-60c2125ec134


AWS_KEY=
AWS_REGION=
AWS_SECRET=
AWS_S3BUCKET=xyz
ADMIN_EMAILID=

DB_NAME=
DB_USER=
DB_PASSWORD=
DB_SERVER=
DB_PORT=
```

## Error Codes

- 500 - internal server error occurred, please try again
- 400 - invalid arguments, please try again
- 404 - data not found, please try again
- 401 - unauthorised request, please check again
- 403 - forbidden request, please check login credentials
- 409 - conflict happened, we do not allow duplicate entries, please try again.
- 200 - successful request

## Token Details

- Access Token = access token is a JWT signed token which will be used for all apis in application it has expiry time of 4 hr.

- Refresh Token = refresh token is also a JWT signed token which is used to generate a new access token.It has expiry time of 2 days.