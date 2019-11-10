import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StudentsService} from '../students.service'
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private http : HttpClient, private stu: StudentsService) { }
  url = './assets/Students.json';
  pass: boolean = false;
  userNameCheck: any;
  emailCheck: any;
  students: any;
  newStudents: any;
  ngOnInit() {
    this.getStudents().subscribe(data => {
      this.students = data;
    })
    this.newStudents = this.stu.getStudent();
    console.log(this.newStudents)

  }


  getStudents(){
    return this.http.get(this.url);
  }

  forgotPass(){
    for(var stu of this.students){
      if(this.userNameCheck === stu.username && this.emailCheck === stu.email){
        this.pass = true;
        return stu.password;
      }
    }
    for(var stu of this.newStudents){
      if(this.userNameCheck === stu.userName && this.emailCheck === stu.email){
        this.pass = true;
        return stu.password;
      }
    }
  }

}
