import { STUDENTINFO } from "src/Module/student/Student entity/student.entity";
import { Column, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


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

    @ManyToOne(() => STUDENTINFO, (student) => student.mark)
    @JoinColumn({name: 'student'})
    student: STUDENTINFO;
}