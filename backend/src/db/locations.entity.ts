//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locations')
export class locationsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('real', { nullable: true })
  Latitude: number;

  @Column('real', { nullable: true })
  Longitude: number;
}
