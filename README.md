# Take-Home-Test
The purpose of this project is provide an API to list the commits of the project.

## First steps
<hr>

If this is your first time using this app then you need to follow the next steps to install all the required dependencies and run the app properly
### Requirements
<hr>

You need to have some applications installed on your machine so that you can run this project:
* OS (Windows / MacOS / Linux)
* Node.js
* NPM (Node Package Manager)
* NestJS CLI
* Git

### Nest.js
<hr>

Since this project is built with NestJS you want to install the Nest CLI
```
npm i -g @nestjs/cli
```
### Clone
<hr>

Clone this repository in your computer using the Git command:
```
git clone https://github.com/getellez/take-home-test-api.git
```
### Environment Variables
<hr>

This project need to send requests to an API that you must specify in a `.env` file. So you can create a copy of the `.env.example` file, rename it and fill it with the correct information. In this case the `GITHUB_TOKEN` variable is optional but necessary if you want to increase the amount of request per hour.

### Install dependencies
<hr>

In order to install all the required packages you need to be in the root of your project and run the next command in your terminal:
```
npm install
```
### Demo
<hr>

If you want to run the app, executes the next command in your terminal:
```
npm run start:dev
```

### Tests
<hr>

One of the things we can do to ensure the quality of the code of this project or have an idea of how this project works is run the tests:

```
npm test
```