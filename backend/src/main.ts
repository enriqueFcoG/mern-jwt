import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from "cookie-parser"
import type { NextFunction } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
    origin: "https://aura-research.vercel.app",
    credentials: true,
  })
  app.setGlobalPrefix('api');

  // const config = new DocumentBuilder()
  //   .setTitle('API Documentation')
  //   .setDescription('Documentación de la API con Swagger en NestJS')
  //   .setVersion('1.0')
  //   .addBearerAuth() // Agrega soporte para JWT en la UI
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('docs', app, document, {
  //   swaggerOptions: { persistAuthorization: true }, // Mantiene el token al recargar
  // });
  
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
