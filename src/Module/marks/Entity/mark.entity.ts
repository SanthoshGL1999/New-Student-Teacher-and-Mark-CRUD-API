import { STUDENTINFO } from "src/Module/student/Student entity/student.entity";
import { TEACHERINFO } from "src/Module/teacher/teacher entity/teacher.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MARKS{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TAMIL: number;

    @Column()
    ENGLISH: number;

    @Column()
    MATHS: number;

    @Column()
    SCIENCE: number;

    @Column()
    SOCIAL_SCIENCE: number;

    @ManyToOne(()=> STUDENTINFO,(student)=> student.mark)
    student: STUDENTINFO;

}