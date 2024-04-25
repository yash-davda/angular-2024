import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public hasError: boolean = false;
  public message = "";
  public eventMessage = "";
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    console.log("Hello everone");
    this.message = "this message displyed after click";
  }
  onClickEvent(event:any) {
    console.log(event);
    this.eventMessage = event.type;
  }
}
