import { Student } from './../model/student';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  constructor(private _http: HttpClient , private _router:Router) { }

  ngOnInit(): void {

    // get all students 
    this._http.get("https://api.mohamed-sadek.com/Student/Get").subscribe(
      (resposne: any) => {
        this.students = resposne.Data;
      }
      ,
      (error) => {
        console.log("error");
      }
    );
  }
  // add student
  addStudents(Name: string, Age: any, Mobile: any, Email: any): void {
    let student = new Student();
    student.Name =Name;
    // student.LastName = LastName;
    student.Age = Age;
    student.Email = Email;
    student.Mobile = Mobile;
    this._http.post("https://api.mohamed-sadek.com/Student/POST", student).subscribe(
      (response: any) => {
        this.students.push(student)
        alert('Added')
      }
    );
  }

  sortByAge(arr: Student[]): Student[] {
    return arr.sort((a, b) => a.Age - b.Age)
  }
  getStudentsCount(): number {
    return this.students.length;
  }
  // delete
  delete(index: number): void {
    let student = this.students[index];
    this._http.delete(`https://api.mohamed-sadek.com/Student/Delete?id=${student.ID}`).subscribe(
      (resposne: any) => {
        if (resposne.Success) {
          this.students.splice(index, 1);
        }
        else {
          alert(resposne.Message);
        }
      }
    );
  }
  update(index: number): void {
    let student = this.students[index];
    this._http.put(`https://api.mohamed-sadek.com/Student/Put`, student).subscribe((response:any)=>{
      if(response.Success){
        alert("DONE")
      }
    });
  }

  btnClick() {
    this._router.navigateByUrl('/students');
};

}
