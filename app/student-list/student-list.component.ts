import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public student: any;
  constructor(private _student: StudentsService) { }

  ngOnInit(): void {
    this._student.getStudent().subscribe(data => this.student = data);
  }

}
