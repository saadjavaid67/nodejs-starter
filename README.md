# Nodejs-Express-Mongoose-Starter

This template is designed to kickstart your new projects with ease. It encapsulates fundamental concepts and provides a customizable foundation tailored to your project requirements.

- Quick setup for building RESTful APIs with Node.js, Express, and Mongoose.
- A production-ready Node.js application, installed and configured effortlessly.
- Built-in features include JWT-based authentication and request validation.

**Stay tuned for updates by starring the repository!**

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Features](#features)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

<br>

## [Getting Started](#getting-started)

### [Prerequisites](#prerequisites)

- Make sure to setup the NodeJS Developer environment.
- Following are the pre-requisites:
  - [Node.js](https://nodejs.org/)
  - [MongoDB](https://www.mongodb.com/)

### [Installation](#installation)

1. Clone the repository

   ```bash
   git clone https://github.com/saadjavaid67/nodejs-starter.git
   ```

2. Clone the repository

   ```bash
   cd nodejs-starter
   ```

3. Install dependencies

   ```bash
   npm install
   ```

## [Configuration](#configuration)

1. Rename/copy [.env.example](.env.example) to '.env'
2. Configure **JWT_TOKEN_SECRET=**
3. Run the project
   `bash
    npm run start
    `
   This is how **.env.example** looks like:

```env
PORT=5000
API_PREFIX='/api/v1'

JWT_TOKEN_SECRET=
SESSION_TIMEOUT="1h"

# DATABASE
MONGODB_URI='mongodb://localhost:27017/your_database'
```

## [Features](#features)

- **NoSQL database**: [MongoDB](https://www.mongodb.com/) object data modeling using [Mongoose](https://mongoosejs.com/)
- **Authentication and authorization**: using [JWT](https://jwt.io/) (access and refresh token)
- **Validation**: request data validation using [Express Validator](https://github.com/express-validator/express-validator)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv)
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)

## [Usage](#usage)

### 1. Create the Model:

Create a dedicated model file 'modelName.js' in [models](src/models) directory. You can simply copy the existing [User.js](src/models/User.js) to save time.

### 2. Define the Route:

- Establish a new route file 'modelNameRoutes.js' in [routes](src/api/routes) directory. This file will handle incoming requests related to your model.

- Incorporate the newly created route into the master routing file, [/src/routes/index.js](/src/routes/index.js). 

- Example: 
    ```js
    const modelNameRoutes = require('../api/routes/modelNameRoutes');
    router.use('/modelName', modelNameRoutes);
    ```

### 4. Make a Validator:

If you need a validator in create 'modelNameValidator.js' in [Validators](/src/api/validators) directory. This validator will enforce data validation rules for your model. You can use [userValidator.js](src/api/validators/userValidator.js) as reference.

Usage Example: (in your 'modelNameRoutes.js' file)
```js
const { registerValidator, loginValidator } = require("../validators/userValidator");
router.post("/register", registerValidator, userController.register);
```

### 6. Make a Controller:

Make a controller file 'modelNameController.js' in [controllers](/src/controllers) directory. This file will contain the logic to process incoming requests and interact with the model. you can use [userController.js](src/controllers/userController.js) as reference.

## [Project Structure](#project-structure)

```js
nodejs-starter
├─ confg
│   ├─ app.js
│   └─ database.js
├─ providers
│   ├─ AuthProvider.js
│   └─ DatabaseProvider.js
├─ src
│   ├─ api
│   │   ├─ middlewares
│   │   │   ├─ authMiddleware.js
│   │   │   └─ coreMiddleware.js
│   │   ├─ routes
│   │   │   ├─ index.js
│   │   │   └─ userRoutes.js
│   │   └─ validators
│   │       └─ userValidator.js
│   ├─ controllers
│   │   └─ userController.js
│   ├─ models
│   │   └─ User.js
│   └─ app.js
├─ .env.example
├─ .gitignore
├─ index.js
├─ LICENSE
├─ package-lock.json
├─ package.json
└─ README.md
```

## [API Endpoints](#api-endpoints)

You can use [api.postman_collection.json](api.postman_collection.json) as a API reference. List of available routes:


- **User Auth Routes**:

    - Register - POST /:PREFIX:/user
    - Login - POST /:PREFIX:/user/login
    - Logout - POST /:PREFIX:/user/logout

- **Other User Routes**:
    - Get All Users - GET /:PREFIX:/user

NOTE: PREFIX is defined in .env file. default is '/api/v1'.

## [Contribution](#contribution)

Your contributions are invaluable, not just to me but to everyone seeking to benefit from this resource. I deeply appreciate your time and effort in making this project better.

If you have ideas, improvements, or bug fixes, don't hesitate to contribute. Every contribution, big or small, makes a significant impact.

How to Contribute:
1. Fork the repository.
2. Create a new branch for your changes.
3. Make your improvements, additions, or fixes.
4. Commit and push your changes to your fork.
5. Submit a pull request.

Your contributions help build a vibrant and collaborative community. Thank you for being part of it! 🙌

  **THANK YOU!**
