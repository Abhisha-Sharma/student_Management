import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
studentService:StudentService=inject(StudentService);
  students: Student[] = [];
  totalMarks!: number;
  isEditing:boolean=false;
  isInserting:boolean=false;
  stdIdToEdit!:number;
  @ViewChild('name')
  Name!: ElementRef;
  @ViewChild('gender')
  Gender!: ElementRef;
  @ViewChild('dob')
  Dob!: ElementRef;
  @ViewChild('course')
  Course!: ElementRef;
  @ViewChild('marks')
  Marks!: ElementRef;
  @ViewChild('fee')
  Fee!: ElementRef;
  @ViewChild('editName')
  editName!: ElementRef;
  @ViewChild('editGender')
  editGender!: ElementRef;
  @ViewChild('editDob')
  editDob!: ElementRef;
  @ViewChild('editCourse')
  editCourse!: ElementRef;
  @ViewChild('editMarks')
  editMarks!: ElementRef;
  @ViewChild('editFee')
  editFee!: ElementRef;

ngOnInit(): void {
  this.students = this.studentService.students;
  this.totalMarks=this.studentService.totalMarks
}
OnInsertClicked(){
  this.isInserting = true;
  console.log("hello i am here on INsertclick button");
  
}
OnInsertCancelled(){
  this.isInserting=false;
}
OnInsertSaved(){
  this.studentService.CreateStudent(
    this.Name.nativeElement.value, 
    this.Gender.nativeElement.value, 
    this.Dob.nativeElement.value, 
    this.Course.nativeElement.value, 
    this.Marks.nativeElement.value, 
    this.Fee.nativeElement.value
  );
  this.isInserting = false;
}
OnEditClicked(stdId:number){
  this.isEditing=true;
  this.stdIdToEdit=stdId;
}
OnEditCancelled(){
  this.isEditing=false
}
OnEditSaved(student:Student){
  student.name = this.editName.nativeElement.value;
  student.gender = this.editGender.nativeElement.value;
  student.dob = this.editDob.nativeElement.value;
  student.course = this.editCourse.nativeElement.value;
  student.marks = this.editMarks.nativeElement.value;
  student.fee = this.editFee.nativeElement.value
  this.isEditing=false;
}
}
