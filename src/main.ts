import { NestFactory } from '@nestjs/core';
import * as expressListRoutes from 'express-list-routes';
import * as dotenv from "dotenv"; 
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

dotenv.config();

/* TODOs: 
 * 		-- Authetication V
 * 		-- Body validation V
 * 		-- Docker configuration
 * 		-- Error Handling in Controllers
 * 		-- Create a table to ONLY store the Contact Type
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.API_PORT || 3000);
  const server = app.getHttpServer()
  const existingRoutes = server._events.request._router
  expressListRoutes(existingRoutes);
}
bootstrap();
