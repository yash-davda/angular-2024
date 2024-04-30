import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeServiceService {

  constructor() { }

  getEmployees() {
    return [
      { "id":1,"name":"yash","age":23 },
      { "id":2,"name":"Jay","age":27 },
      { "id":3,"name":"Nilam","age":26 },
      { "id":4,"name":"ASha","age":45 }
    ]
  }
}
