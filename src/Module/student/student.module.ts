import { Injectable, Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { STUDENTINFO } from './Student entity/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TEACHERINFO } from '../teacher/teacher entity/teacher.entity';
import { MARKS } from '../marks/Entity/mark.entity';

@Module({
    imports:[TypeOrmModule.forFeature([STUDENTINFO,TEACHERINFO,MARKS])],
    controllers:[StudentController],
    providers:[StudentService]
})
export class StudentModule {
}
