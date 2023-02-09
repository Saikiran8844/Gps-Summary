/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gpsSummaries')
export class GPSSummaries {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deviceId: string;

    @Column()
    deviceType: string;

    @Column({type: "timestamp"})
    timeStamp: string;

    @Column()
    location: string;

}
