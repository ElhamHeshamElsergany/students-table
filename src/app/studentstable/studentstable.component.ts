import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-studentstable',
  templateUrl: './studentstable.component.html',
  styleUrls: ['./studentstable.component.css']
})
export class StudentstableComponent implements OnInit {
  students: Student[] = [];
  isPageLoaded = false;
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get("https://api.mohamed-sadek.com/Student/Get").subscribe(
      (resposne: any) => {
        this.students = resposne.Data;
        this.isPageLoaded=true;
      }
      ,
      (error) => {
        console.log("error");
      }
    );
  }
  addStudents(Name: string, Age: any, Mobile: any, Email: any): void {
    let student = new Student();
    student.Name = Name;
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
}


