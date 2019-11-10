import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url = './assets/Students.json';
  students: any;
  userName: any;
  newPass: any;
  rePass: any;
  ngOnInit() {
    this.getStudents().subscribe(data => {
      this.students = data;
    })


  }
  changePass() {
    for (var stu of this.students) {
      if (this.userName === stu.username) {
        if (this.newPass === this.rePass) {
          stu.password = this.rePass;
          console.log(stu.password)
        }
      }
    }

  }
  getStudents() {
    return this.http.get(this.url)
  }
}
