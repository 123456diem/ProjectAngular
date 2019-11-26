import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{NgxPaginationModule} from 'ngx-pagination';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuestComponent } from './quest/quest.component';
import { ResignterComponent } from './resignter/resignter.component';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UpdateinforComponent } from './updateinfor/updateinfor.component';
import { ListsubComponent } from './listsub/listsub.component';
import {HttpClientModule} from '@angular/common/http';
import { TestsubjectComponent } from './testsubject/testsubject.component'
import {FormsModule} from '@angular/forms';
import {NgxFsModule} from 'ngx-fs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FeedbackComponent,
    QuestComponent,
    ResignterComponent,
    LoginComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent,
    UpdateinforComponent,
    ListsubComponent,
    TestsubjectComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    NgxFsModule,
    RouterModule.forRoot([ 
      { path: '', 	component:  HomeComponent}, 
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'feedback', component: FeedbackComponent},
      {path: 'q&a', component: QuestComponent},
      {path: 'resign', component: ResignterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'change', component: ChangepasswordComponent},
      {path: 'forgot', component: ForgotpasswordComponent},
      {path: 'listsubject', component: ListsubComponent},
      {path: 'listsubject/:Id', component: TestsubjectComponent },
      {path: 'update', component: UpdateinforComponent},
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
     
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
