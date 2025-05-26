const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book Service API",
      version: "1.0.0",
      description: "API for managing books",
    },
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJsDoc(options);
