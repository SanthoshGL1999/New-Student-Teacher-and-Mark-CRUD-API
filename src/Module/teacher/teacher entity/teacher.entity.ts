import { STUDENTINFO } from "src/Module/student/Student entity/student.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TEACHERINFO{
    
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    NAME: string;

    @Column()
    SUBJECT: string;

    @Column()
    CLASS: number;

    @ManyToMany(() => STUDENTINFO, (student) => student.teacher)
    @JoinColumn({name: 'studentID'})
    student: STUDENTINFO;
}