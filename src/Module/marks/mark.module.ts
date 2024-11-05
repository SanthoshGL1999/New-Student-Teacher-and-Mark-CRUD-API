import { Module } from '@nestjs/common';
import { MarkService } from './mark.service';
import { MarkController } from './mark.controller';
import { MARKS } from './Entity/mark.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { STUDENTINFO } from '../student/Student entity/student.entity';
import { TEACHERINFO } from '../teacher/teacher entity/teacher.entity';


@Module({
  imports:[TypeOrmModule.forFeature([MARKS,STUDENTINFO,TEACHERINFO])],
  providers: [MarkService],
  controllers: [MarkController]
})
export class MarkModule {}
