import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService  {
  students = [];


  changeStudents: any;

  constructor() { }
  addToStudent(student) {
    this.students.push(student)
  }

  getStudent() {
    return this.students
  }


}
