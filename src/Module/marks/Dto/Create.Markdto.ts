import { IsNotEmpty, IsNumber } from "class-validator";



export class CreateMarkDto{

    TAMIL: number;
    ENGLISH: number;
    MATHS: number;
    SCIENCE: number;
    SOCIAL_SCIENCE: number;
    MARK_ID?:number;
    studentID: number

}