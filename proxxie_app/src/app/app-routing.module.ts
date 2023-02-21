import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { SchoolComponent } from './school/school.component';

const routes: Routes = [
  //login page
  { path: 'login', component: LoginComponent },
  //signup page
  { path: 'register', component: SignupComponent },
  //home page
  { path: '', component: HomeComponent },

  // student page
  { path: 'student', component: StudentComponent },

  // school page
  { path: 'school', component: SchoolComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
