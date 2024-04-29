import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref-variables',
  templateUrl: './temp-ref-variables.component.html',
  styleUrls: ['./temp-ref-variables.component.css']
})
export class TempRefVariablesComponent implements OnInit {

  constructor() { }
  tempValue:string = "";
  ngOnInit(): void {
  }
  onClick(value:any) {
    this.tempValue = value;
  }
}
