import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { IEmployee } from 'src/app/employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employee: any;
  constructor(private _employeeService : EmployeeServiceService) { }


  ngOnInit(): void {

    //this.employee = this._employeeService.getEmployees(); this is for service
    this._employeeService.getEmployees().subscribe(data => this.employee = data)
  }

}
