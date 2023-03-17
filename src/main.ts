import { NestFactory } from '@nestjs/core';
import { AppModule } from '@modules/app.module';
import * as expressListRoutes from 'express-list-routes';

/* TODOs: 
 * 		-- Authetication
 * 		-- Body validation
 * 		-- Docker configuration
 * 		-- Error Handling in Controllers
 * 		-- Create a table to ONLY store the Contact Type
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const server = app.getHttpServer()
  const existingRoutes = server._events.request._router
  expressListRoutes(existingRoutes);
}
bootstrap();
