import { Router } from 'express';
import fs from 'fs';

const routes = Router();

routes.get('/', (req, res) => res.status(200).json({ message: "Hi, Welcome Friend!" }));

fs.readdirSync(__dirname+'/urls').forEach(function(file) {
  if (file === "index.ts" || file === "urls") return;
  require('./urls/' + file)(routes);
});

export { routes };
