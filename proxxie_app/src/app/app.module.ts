import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { SchoolComponent } from './school/school.component';
import { ParentsComponent } from './parents/parents.component';
import { HumanressourceComponent } from './humanressource/humanressource.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    BannerComponent,
    HomeComponent,
    StudentComponent,
    SchoolComponent,
    ParentsComponent,
    HumanressourceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ]),
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
