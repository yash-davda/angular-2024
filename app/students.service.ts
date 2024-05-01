import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from 'src/app/students'
@Injectable()
export class StudentsService {
  private _url1: string = "/assets/data/students.json";

  constructor(private http: HttpClient) { }

  getStudent(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._url1);
  }
}
