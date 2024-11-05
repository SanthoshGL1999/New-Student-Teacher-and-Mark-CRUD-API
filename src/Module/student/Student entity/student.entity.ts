import { MARKS } from "src/Module/marks/Entity/mark.entity";
import { TEACHERINFO } from "src/Module/teacher/teacher entity/teacher.entity";
import { Entity,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, OneToMany } from "typeorm";

@Entity()
export class STUDENTINFO{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    ROLLNO: number;

    @Column()
    NAME: string;

    @Column()
    AGE: number;

    @Column()
    COURSE: string;

    @Column()
    EMAIL_ID: string;

    @Column()
    MARK_ID: number;

    @Column()
    TEACHER_ID:number;

    @Column()
    CLASS: number;

    @ManyToMany(()=>TEACHERINFO,(teacher)=>teacher.student)
    teacher: TEACHERINFO[];
    @OneToMany(()=>MARKS,(mark)=>mark.student)
    mark: MARKS[];

}