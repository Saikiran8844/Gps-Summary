/* eslint-disable prettier/prettier */

import {BadRequestException, Body, Controller, Get, Param, Post, Req, Res, UnauthorizedException} from '@nestjs/common';
import {AppService} from './app.service';
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {Response, Request} from 'express';


@Controller('/api')
//@crossOriginIsolated('localhost:3000')
export class AppController {
    getHello(): any {
      throw new Error('Method not implemented.');
    }
    constructor(
        private readonly appService: AppService,
        private jwtService: JwtService
    ) {
    }

    @Post('/register')
    async register(
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('email') email: string,
        @Body('password') password: string
    ) {
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await this.appService.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        return user;
    }

    @Post('/login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response
    ) {
        const user = await this.appService.findOne({email});

        if (!user) {
            throw new BadRequestException('invalid credentials');
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('invalid credentials');
        }

        const jwt = await this.jwtService.signAsync({id: user.id});

        response.cookie('jwt', jwt, {httpOnly: true});

        return {
            message: 'success'
        };
    }

   
    @Get('user')
    async getGpsData() {
       const GPSSummaries= await this.appService.getGpsSummary();
       return GPSSummaries;
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response) {
        response.clearCookie('jwt');

        return {
            message: 'success'
        }
    }
}