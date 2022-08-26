import express from 'express';
import cors from 'cors';
import swaggerUi  from 'swagger-ui-express';
import * as swaggerFile from '../swagger_output.json';
import { routes } from './routes';
import { db_mysql } from './config/my-sql.config';

const app = express();

db_mysql.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('The db is initialize 🎇');
  }
});

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(routes);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));


export { app };