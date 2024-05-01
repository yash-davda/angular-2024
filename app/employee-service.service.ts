import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/employee';

@Injectable()
export class EmployeeServiceService {
  private _url: string = "/assets/data/employees.json";
  constructor(private http: HttpClient) {
    
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

  //this demo is for service
  //getEmployees() {
  //  return [
  //    { "id":1,"name":"yash","age":23 },
  //    { "id":2,"name":"Jay","age":27 },
  //    { "id":3,"name":"Nilam","age":26 },
  //    { "id":4,"name":"ASha","age":45 }
  //  ]
  //}
}
