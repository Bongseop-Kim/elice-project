import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/exception/http-exception.filter';
import * as mysql from 'mysql';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000',
    database:'team5'
  })
  connection.connect((err)=>{
    if(err){
      console.error('MySQL connection failed',err);
      return;
    }
    console.log('Connected to MySQL database');
  })

  await app.listen(3000);
}
bootstrap();
