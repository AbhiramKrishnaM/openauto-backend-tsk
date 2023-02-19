# Openauto backend

The project is structured around Docker Compose, which provides an easy way to set up and manage a PostgreSQL database as a separate service. With this approach, developers can easily spin up the database, make changes to the schema, and interact with the database using Sequelize without having to worry about setting up and managing the database server themselves.

## The boilerplate includes the following features:

- Express.js web application framework
- PostgreSQL database management system
- Sequelize ORM system for database access
- Docker Compose integration for easy database setup

- Sample user model and controller for handling form submission
- Configuration for environment-specific variables using the dotenv package

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. You can add the default values provided for now.

`APP_PORT`=4000

`DB_HOST`=db

`DB_PORT`=5432

`DB_NAME`=openauto

`DB_USER`=openauto

`DB_PASSWORD`=1234

## Run this application [Docker daemon required]

Clone the project

```bash
  git clone git@github.com:AbhiramKrishnaM/openauto-backend-tsk.git
```

Go to the project directory

```bash
  cd openauto-backend-tsk
```

To run the application make sure the system has latest version of Docker installed.

```bash
 sudo docker compose up
```

Application runs at port 4000

```bash
 http://localhost:4000
```

## Api

Single endpoint for submitting form. Should pass unique Email and name.

| Endpoint | type | fields      |
| -------- | ---- | ----------- |
| /submit  | post | name, email |
