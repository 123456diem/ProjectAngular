import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-testsubject',
  templateUrl: './testsubject.component.html',
  styleUrls: ['./testsubject.component.css']
})
export class TestsubjectComponent implements OnInit {

  constructor(private http: HttpClient, private rout: ActivatedRoute) { }
  id: any;
  sumMark = 0;
  toltalMark = 0;
  correctAns = [];
  finish1: boolean = true;
  finished: boolean = false;
  congratulation: boolean = false;
  listSubjects: any;
  subjectForId: any;
  itemPerPage = 1;
  currentPage = 1;
  question: any;
  answer: any;
  totalPage: any;
  urlSubject = './assets/Quizs/';
  url = './assets/Subjects.json';
  buttonFinish : boolean = false;
  ngOnInit() {
    const url = this.rout.snapshot.paramMap.get('url');
    this.rout.paramMap.subscribe(param => {
      this.id = param.get('Id')
    })

    this.getAllSubject().subscribe(data => {
      this.listSubjects = data;
      this.subjectForId = this.listSubjects.find(p => p.Id === this.id);

    })
    this.urlSubject += this.id +'.js';

    

    this.getQuestion().subscribe(data => {
      this.question = data;
      this.answer = this.question[this.currentPage - 1].Answers;
      this.totalPage = Math.ceil(this.question.length / this.itemPerPage);
    })
   
    console.log(this.answer)
    
  }

  getAllSubject() {
    return this.http.get(this.url)

  }

  getQuestion() {
    return this.http.get(this.urlSubject)
  }
  nextPage() {
    if (this.currentPage < this.totalPage) {
      this.currentPage++;
      this.answer = this.question[this.currentPage - 1].Answers;
    }

  }
  backPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.answer = this.question[this.currentPage - 1].Answers;
    }
    this.buttonFinish = false;
  }
  LastPage() {
    this.currentPage = this.totalPage;
    this.answer = this.question[this.currentPage - 1].Answers;
    this.buttonFinish = true;
  }
  firstPage() {
    this.currentPage = 1;
    this.answer = this.question[this.currentPage - 1].Answers;
    this.buttonFinish = false;
  }
  finish() {
    this.finished = true;
    this.finish1 = false;
    for(let i = 0;i <this.question.length;i++ ){
      if(this.correctAns[i] == this.question[i].AnswerId){
        this.sumMark += 1;
      }
    }
    console.log(this.sumMark)
  }
  noQuestion() {
    this.finished = false;
    this.finish1 = true;
    this.sumMark = 0;
  }
  yesQuestion() {
    this.finished = false;
    this.congratulation = true;
    this.finish1 = false;
  }
}
