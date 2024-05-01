import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from 'src/app/students'
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public _url: string = "src/assets/data/students.json";
  constructor(private http: HttpClient) { }

  getStudent(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._url);
  }
}
