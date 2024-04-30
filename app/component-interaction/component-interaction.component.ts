import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input('parentName') public childName: any;
  @Input('variableNum') public childVariable: number | undefined;
  constructor() { }
  ngOnInit(): void {
  }

}
