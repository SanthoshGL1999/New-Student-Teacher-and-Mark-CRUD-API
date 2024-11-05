import { TypeOrmModule, TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { STUDENTINFO } from "src/Module/student/Student entity/student.entity";
import { TEACHERINFO } from "src/Module/teacher/teacher entity/teacher.entity";
import { MARKS } from "src/Module/marks/Entity/mark.entity";

@Injectable()
export class DataBaseService implements TypeOrmOptionsFactory{ 
createTypeOrmOptions():TypeOrmModuleOptions{
return{
  type:'mssql',
  host:'localhost',
  port:1433,
  username:'Krion',
  password:'qwerty',
  database:'STUDENTDB',
  entities:[STUDENTINFO,TEACHERINFO,MARKS],
  options:{trustServerCertificate:true,
    enableArithAbort: true,
  }
};
}
}


