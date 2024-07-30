import { Injectable } from '@angular/core';
import { Student} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
students:Student[]=[
  new Student(1,'Abhisha Sharma','Female',new Date('31-01-2003'),'BscCsit',510,20000),
  new Student(2,'Nabina Tiwari','Female',new Date('20-10-2003'),'BscCsit',490,20000),
  new Student(3,'swikriti Sanjel','Female',new Date('31-07-2005'),'BscCsit',470,20000),
  new Student(4,'Srishti Subedi','Female',new Date('20-04-2003'),'BscCsit',460,20000),
  new Student(5,'Kritika Thami','Female',new Date('20-04-2003'),'BscCsit',450,20000),
];
totalMarks:number=600;
  nativeElement: any;
CreateStudent(name: string,gender: string,dob: Date,course: string,marks: number,fee: number){
  let id = this.students.length+1;
  let student = new Student(id,name,gender,dob,course,marks,fee);
  this.students.push(student);
  
}
}
