import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-emplouyee-details',
  templateUrl: './emplouyee-details.component.html',
  styleUrls: ['./emplouyee-details.component.css']
})
export class EmplouyeeDetailsComponent implements OnInit {
  public employee : any;
  constructor(private _employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employee = this._employeeService.getEmployees();
  }

}
