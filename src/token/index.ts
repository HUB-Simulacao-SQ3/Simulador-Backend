import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import { Request, Response } from 'express';


dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

function middlewareJWT(req: Request, res: Response, next) {
  const token = req.headers['authorization'];

  if (!token) return res.status(401)
    .json({ auth: false, message: 'Não foi passado nenhum token' });

  const verify = verifyToken(token);

  if (verify?.data.auth === false) {
    return res.status(500).json({ auth: false, message: 'Failed to authenticate token.', token });
  }

  next();
}


function createToken(object: any) {
  var token = jwt.sign(object, process.env.JWT_SECRET_KEY as string);
  return token;
}

function verifyToken(token: any) {
  const verified: any = {};
  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET_KEY as string, (err, decoded) => {
    if (err) {
      verified.data = {
        auth: false,
        message: 'Ocorreu um erro ao verificar o token',
        error: err,
      }
      return;
    }

    verified.data = {
      auth: true,
      message: 'Token verficado com sucesso',
      decoded
    }
  })

  return verified;

}

export { createToken, verifyToken, middlewareJWT }