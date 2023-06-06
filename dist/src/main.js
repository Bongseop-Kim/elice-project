"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./common/exception/http-exception.filter");
const mysql = require("mysql");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '0000',
        database: 'team5'
    });
    connection.connect((err) => {
        if (err) {
            console.error('MySQL connection failed', err);
            return;
        }
        console.log('Connected to MySQL database');
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map