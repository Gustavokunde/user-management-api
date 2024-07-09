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

## Project structure
```bash
├── server
│   └── migrations --> used to store TypeORM migrations
│ 
├── src
│   ├── domain
│   │     ├── entities --> entities interface
│   │     └── repositories --> database integration interface
│   └── infrastructure --> external services and controllers
│         ├── config --> database integration config
│         ├── controllers
│         │       ├── auth --> auth routes
│         │       └── user --> user routes
│         ├── entities --> TypeORM database model
│         ├── guards --> auth and role guards to check user permissions
│         └─ repository --> database model access
├── main.ts --> main file
└── README.md
```

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

Even though I already know NestJS, I never worked with this framework before. Therefore I had to learn the basic part and search integration with third party libraries such as TypeORM in order to make it work. Many hours searching in the documentation of both technologies were made and as well in the dev community in order to make the implementations work.

To think in a project structure it requires time and a strong architecture knowledge to have a good structure that allows software growth but not also over engineer. In order to make it happen, I followed the NestJS best practices provided in the documentation and tried to start a clean architecture structure, always think if it was really need in the moment so I could keep it simple and concise.  

Half part of commits were made in a bitbucket student account so I had to rebase and change it to to place it on github.

## Future improvements

In order to make this project grow, the architecture will need to be rethink. Even though it works, it is better to follow as much as possible the principles of [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) by Robert C. Martin (Uncle Bob) so it can grow safer.

Provide a container with docker to prevent any environment issue and also provide the database structure.

Best handler the api errors

Implement unit tests