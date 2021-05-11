# SafePlan-Web
A MERN stack web application which pulls data from a database and renders it to the client. The application could be used to track patient data over time. Data can track changes in mood or other mental health indicators as input by a patient. The system simulates how a clinical psychologist might wish to view patient data. 

The system utilises Rest API’s to transfer data from the server side to the client side and to the database. The data is stored in a MongoDB database.

Authentication is a central feature as security is paramount. The user credentials are stored in another MongoDB database collection and compared against user input at the login screen to authenticate the user. New users can register and their user data is pushed to the database via a Rest API.

## **Motivation**

In developing this application, the motivation was to create a full-stack application using the MERN stack. This gave great practise in working with the 
technologies involved, but also in a crucial aspect of software development which is linking front-end, back-end, and database via Rest APIs. 

The project was also tremendously useful in working with useful dependencies which boost an applications performance.

The other motive in developing this application was to get into the mind set of the end user and have the considerations of end user experience 
be a driving force in the development and especially the UI development.

## **Tech/Frameworks Used**

**MERN:** 
- **M**ongoDB 
- **E**xpress.js 
- **R**eact 
- **N**ode.js

**M**ongoDB: NoSQL database which uses JSON-like documents with optional schemas. 

**E**xpress.js: Back-end web application framework for Node.js.

**R**eact: Front end, JavaScript library for building user interfaces or UI components.

**N**ode.js: Back-end JavaScript runtime environment.

Postman for testing the Rest APIs.

**Key Dependencies:**
- axios
- bcryptjs
- body-parser
- classnames
- concurrently
- jsonwebtoken
- jwt-decode
- mongoose
- passport
- passport-jwt
- react-redux
- react-router-dom
- redux
- validator

## **How To Use**

The application is perfectly simple to use. A user will first encounter the login/registration screen. A user will
enter details or create an account. They will then see the dashboard with patient data.
