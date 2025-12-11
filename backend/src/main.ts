import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from "cookie-parser"
import type { NextFunction } from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())
  app.use((req: any, res: Response, next: NextFunction) => {
  console.log('=== COOKIE DEBUG ===');
  console.log('URL:', req.url);
  console.log('Method:', req.method);
  console.log('Cookies received:', req.cookies);
  console.log('Headers.cookie:', req.headers?.values());
  console.log('Origin:', req.headers?.values());
  next();
});
  app.enableCors({
    origin: "https://aura-research.vercel.app",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
  // app.enableCors()
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
