import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';


dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

function createToken(object: any) {
  var token = jwt.sign(object, process.env.JWT_SECRET_KEY as string);
  return token;
}

function verifyToken(token: any) {
  var verify = jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, decoded) => {
    if (err) {
      return {
        auth: false,
        message: 'Ocorreu um erro ao verificar o token',
        error: err,
      }
    }

    return {
      auth: true,
      message: 'Token verficado com sucesso',
      decoded
    }
  })
  return verify;

}

export { createToken, verifyToken }