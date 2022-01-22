import { Student } from './../model/student';
import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  students: Student = new Student ;

  constructor(private _studentservece: StudentService, private _activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activetedRoute.paramMap.subscribe(params => {
      this._studentservece.getdetails(params.get('id')).subscribe(
        (response: any) => {
          this.students = response.Data;
        });

    });

  }

}
