/* eslint-disable prettier/prettier */
// 
import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import { GPSSummaries } from './gpsSummary.entity';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(GPSSummaries) private readonly gpsSummaryRepository: Repository<GPSSummaries>
    ) {
    }

    async create(data: any): Promise<User> {
        return this.userRepository.save(data);
    }

    async findOne(condition: any): Promise<User | null> {
        return this.userRepository.findOneBy(condition);
    }
    async getGpsSummary():Promise<GPSSummaries[]>{
        const gpsData= await this.gpsSummaryRepository.find()
        return gpsData;
    }
}
