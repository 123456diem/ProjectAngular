import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StudentsService } from '../students.service'

@Component({
  selector: 'app-resignter',
  templateUrl: './resignter.component.html',
  styleUrls: ['./resignter.component.css']
})
export class ResignterComponent implements OnInit {

  constructor(private http: HttpClient, private stu :StudentsService) { }
  url = './assets/Students.json'
  students: any;
  student = {
    username: null,
    password: null,
    fullname: null,
    email: null,
    gender: null,
    birthday: null,
    schoolfee: null,
    mark: null,
  }
  item: any;
  ngOnInit() {
    this.getAllStudent().subscribe(data => {
      this.students = data;
    })
  }


  getAllStudent() {
    return this.http.get(this.url)
  }
  addNewStudent(){
    this.stu.addToStudent(this.student)
  }
}
