import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {

  const app = {
    logLevel: process.env.LOG_LEVEL || 'info',
    port: process.env.APLICATION_PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'production',
    password: process.env.PASSWORD_REGISTER_CLIENT,
    urlApi: process.env.URL_API
  };

  const auth = {
    serviceAccount: process.env.AUTH_SERVICE_ACCOUNT,
  };

  return { app, auth };
});