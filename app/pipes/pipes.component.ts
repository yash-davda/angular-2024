import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
  public name = 'Yash Davda';
  public person = {
    "firstname": "Yash",
    "lastname": "Davda"
  }
  public date = new Date();
  ngOnInit(): void {
  }

}
