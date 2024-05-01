import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public student: any;
  constructor(private _student: StudentsService) { }


    ngOnInit(): void {
      this._student.getStudent().subscribe(data => this.student = data);
    }


}
