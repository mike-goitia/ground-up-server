# ground-up-server
Ground Up Server Project

## What is the Ground Up Server project?
The **Ground Up Server** project is a personal project with a goal of building a scalable backend service "from the ground up". The phrase "ground up" can also be interpreted, in this case, as making a service whole from different pieces, pieces that are ground up. 

Mostly a boilerplate to get some of my personal projects running without starting... from the ground up.

## Goals
- [X] Create a Node + Apollo GraphQL Backend Service
- [X] Create a MongoDb persistence layer
- [X] Setup Linting and AirBnB Style Guide
- [X] Create CI/CD pipeline with Github Actions and Deploy on Elastic Beanstalk
- [] Give some examples of some advance Queries and Mutations with GQL

## Guides I Used
### Setup Apollo Server
[Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started/)

### Setup Babel to allow ES6, nodemon, and dotenv
[The minimal Node.js with Babel Setup](https://www.robinwieruch.de/minimal-node-js-babel-setup)

### Connecting Mongoose to a MongoDB
Obtain the mongoDB URI from your service and add to .env file. Never add a .env file to version control.
[Getting Started](https://mongoosejs.com/docs/index.html)

### ES Lint with Airbnb Style guide
Install the plugin and execute `./node_modules/.bin/eslint --init`
[ES Lint Plugin](https://github.com/babel/example-node-server)

### Transpiling with Babel for production
[Example Node Server w/ Babel](https://mongoosejs.com/docs/index.html)

### Github actions for CI with Elastic Beanstalk
[Deploy using Github Actions on AWS Elastic BeanStalk](https://medium.com/javascript-in-plain-english/deploy-using-github-actions-on-aws-elastic-beanstalk-c23ecd35776d)

## Helpful VSCode Plugins
(ES6 Snippets)[https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets]