

import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {User} from "./user.entity";
import {JwtModule} from "@nestjs/jwt";
import { GPSSummaries } from './gpsSummary.entity';

@Module({
    imports: [
        
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'Sai8844*',
            database: 'gps',
            entities: [User,GPSSummaries],
            synchronize: true,
            autoLoadEntities: true,
        }),
        TypeOrmModule.forFeature([User, GPSSummaries]),
        JwtModule.register({
            secret: 'secret',
            signOptions: {expiresIn: '1d'}
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}