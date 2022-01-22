import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HomeComponent } from './home/home.component';
import { StudentstableComponent } from './studentstable/studentstable.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    NavbarComponent,
    FooterComponent,
    StudentDetailsComponent,
    HomeComponent,
    StudentstableComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
