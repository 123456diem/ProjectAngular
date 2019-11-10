import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from '../students.service'
@Component({
  selector: 'app-updateinfor',
  templateUrl: './updateinfor.component.html',
  styleUrls: ['./updateinfor.component.css']
})
export class UpdateinforComponent implements OnInit {

  constructor(private http: HttpClient, private stu: StudentsService) { }
  url = './assets/Students.json';
  userNameInfor: any;
  students: any;
  newStudents: any;
  showInfor: boolean = false;
  fullName: any;
  formStudent = {
    userName: null,
    password: null,
    fullName: null,
    email: null,
    gender: null,
    birthday: null,
    schoolfee: null,
    mark: null,
  }
  ngOnInit() {
    this.getAllStudents().subscribe(data => {
      this.students = data;
    })
    this.newStudents = this.stu.getStudent();
  }



  watchInfor() {
    for (var student of this.students) {
      if (this.userNameInfor === student.username) {
        this.showInfor = true;
        this.form(student);
      }
    }
    for (var student of this.newStudents) {
      if (this.userNameInfor === student.username) {
        this.showInfor = true;
        this.form(student);
      }
    }
  }
  update() {
    for(var student of this.newStudents){
      if(this.userNameInfor === student.username){
        this.formUpdate(student)
      }
    }
  }
  back() {
    this.showInfor = false;
  }
  getAllStudents() {
    return this.http.get(this.url)
  }

  formUpdate(student){
    
    student.usernam = this.formStudent.userName;
    student.pasword = this.formStudent.password;
    student.fullname = this.formStudent.fullName;
    student.email = this.formStudent.email;
    student.gender = this.formStudent.gender;
    student.birtday = this.formStudent.birthday;
    student.schoolfee = this.formStudent.schoolfee;
    student.mark = this.formStudent.mark
  }

  form(student) {
    if(student.gender === 'true'){
      student.gender = 'Male'
    }else {
      student.gender = 'Female'
    }
    this.formStudent = {
      userName: student.username,
      password: student.password,
      fullName: student.fullname,
      email: student.email,
      gender: student.gender,
      birthday: student.birthday,
      schoolfee: student.schoolfee,
      mark: student.marks
    }
  }

}
