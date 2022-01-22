import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) {}
  getdetails(id:any)
    {
      return this._http.get(`https://api.mohamed-sadek.com/Student/GetByID?id=${id}`)
    }
    get(){
      return this._http.get(`https://api.mohamed-sadek.com/Student/Task/Get`);
     }
}
