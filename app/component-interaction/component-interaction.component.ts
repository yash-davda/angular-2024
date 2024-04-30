import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input('parentName') public childName: any;
  @Input('variableNum') public childVariable: number | undefined;
  @Output() public childEvent = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  fyreEvent() {
    this.childEvent.emit('Hey Yash Davda');
  }
}
