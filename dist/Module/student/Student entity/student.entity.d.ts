import { MARKS } from "src/Module/marks/Entity/mark.entity";
import { TEACHERINFO } from "src/Module/teacher/teacher entity/teacher.entity";
export declare class STUDENTINFO {
    ID: number;
    ROLLNO: number;
    NAME: string;
    AGE: number;
    COURSE: string;
    EMAIL_ID: string;
    MARK_ID: number;
    TEACHER_ID: number;
    CLASS: number;
    teacher: TEACHERINFO;
    mark: MARKS;
}
