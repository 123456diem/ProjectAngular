import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {StudentsService} from '../students.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : HttpClient, private stu: StudentsService ) { }
  url = './assets/Students.json';
  checklogin :boolean = false;
  successLogin: any;
  userNameCheck: any;
  passwordCheck: any;
  students: any;
  newStudent: any
  ngOnInit() {
    this.getStudents().subscribe(data =>{
      this.students = data;
    })
    this.newStudent = this.stu.getStudent();
    console.log(this.newStudent)
  }
  getStudents(){
    return this.http.get(this.url)
  }
  checkLogin(){
    for(var student of this.students){
      if((this.userNameCheck === student.username) && (this.passwordCheck === student.password)){
        this.checklogin = true;
        return;
      }
    }
    for(var student of this.newStudent){
      if((this.userNameCheck === student.username) && (this.passwordCheck === student.password)){
        this.checklogin = true;
        return
      }
    }
    alert('Sai thong tin')
  }
}
