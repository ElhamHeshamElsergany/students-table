import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentstableComponent } from './studentstable/studentstable.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},

  {path:'studentform', component:StudentsComponent},
  {path:'students/studentsdetails/:id', component:StudentDetailsComponent},
  {path:'students', component:StudentstableComponent},
  {path:'details', component:StudentDetailsComponent},
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
