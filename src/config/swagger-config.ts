// import fs from 'fs';

import { User } from "../models/users";

// import path from 'path';
const fs = require('fs');
const path = require('path');
const swaggerAutogen = require('swagger-autogen')();
const baseDocFile = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "REST API",
    description: ""
  },
  host: "localhost:3002",
  basePath: "/",
  schemes: ["http"],

  definitions: {
    user: {
      email: 'string', name: 'string', type: 'UsersTypeEnum', id: 'number', image: 'string'
    },
    userUpdate: {
      email: 'string', name: 'string', type: 'UsersTypeEnum', image: 'string'
    }
  }
}

fs.readdir(path.join(__dirname + '/../routes/urls'), async (err: any, files: any) => {
  const outputFile = './swagger_output.json';
  swaggerAutogen(outputFile, files.map((fileName: string) => path.join(__dirname + `/../routes/urls/${fileName}`)), baseDocFile);
});

