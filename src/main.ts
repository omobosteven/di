import { NestFactory } from '@nestjs/core';
import { ComputerModule } from 'src/computer/computer.module';

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  await app.listen(3000);
}
bootstrap();
