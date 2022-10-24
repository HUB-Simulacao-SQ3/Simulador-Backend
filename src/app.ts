import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import * as swaggerFile from './config/swagger/swagger_output.json';
import { routes } from './routes';
import './config/database/my-sql.config';

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json({ limit: '50mb' }));
app.use(routes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));


export { app };