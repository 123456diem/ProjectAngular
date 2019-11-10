import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-listsub',
  templateUrl: './listsub.component.html',
  styleUrls: ['./listsub.component.css']
})
export class ListsubComponent implements OnInit {

  constructor(private http: HttpClient) { }
  itemPerPage=4;
  currentPage=1;
  totalPage;
  listSubject : any;
  url = './assets/Subjects.json'


  ngOnInit() {
    this.getAllSubject().subscribe(data=>{
        this.listSubject = data;
    })
    console.log(this.listSubject)
    this.totalPage=Math.ceil(20/this.itemPerPage);
    console.log(this.totalPage)
  }

  getAllSubject(){
      return this.http.get(this.url)
  }

  nextPage(){
    if(this.currentPage<this.totalPage){
      this.currentPage++;
    }
  }
  backPage(){
    this.currentPage--;
  }
  LastPage(){
    this.currentPage=this.totalPage
  }


}
