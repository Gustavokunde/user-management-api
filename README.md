## Description

This project was created in order to show a basic CRUD of an user and authentication with some routes protected based on user role and permissions.

The main structure was made with the tools provided by NestJs Framework 


## Tools

- pnpm for package management
- NestJS for basic structure
- bcrypt to encrypt password 
- postgres in the database
- TypeORM to handle data with JS


## Installation

First you need to have pnpm installed globally in the environment and then run

```bash
$ pnpm install
```

Then you need to provide the .env file as the example showed in the root project called .env-example with the Database access and JWT secret.

After it is finished and database is up you can run the app


## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Challenges faced

## Future improvements

In order to make this project grow, the architecture will need to be rethink. Even though it works, it is better to follow as much as possible the principles of [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) by Robert C. Martin (Uncle Bob)
