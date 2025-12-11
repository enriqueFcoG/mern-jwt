import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import * as fs from 'fs';

async function bootstrap() {
    const httpsOptions = {
    key: fs.readFileSync('cert/localhost-key.pem'),
    cert: fs.readFileSync('cert/localhost.pem'),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });
  app.use(cookieParser())
  app.use((req: any, res: any, next: any) => { 
    console.log('=== COOKIE DEBUG ==='); 
    console.log('URL:', req.url); 
    console.log('Method:', req.method);
    console.log('Cookies received:', req?.cookies);
    console.log('Headers.cookie:', req.headers?.cookie);
    console.log('Origin:', req.headers?.origin);
    console.log('User-Agent:', req.headers['user-agent']);
    next();
  });
  app.enableCors({
    origin: "https://localhost:3000",
    credentials: true,
  })
  // app.enableCors()
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
