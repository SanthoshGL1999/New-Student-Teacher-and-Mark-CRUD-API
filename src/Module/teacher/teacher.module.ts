import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TEACHERINFO } from './teacher entity/teacher.entity';
import { STUDENTINFO } from '../student/Student entity/student.entity';
import { MARKS } from '../marks/Entity/mark.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TEACHERINFO,STUDENTINFO,MARKS])],
  providers: [TeacherService],
  controllers: [TeacherController]
})
export class TeacherModule {}
