import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<h1>Hello Yash</h1>
      <input type="text" value="Yash" [id]="myId" /><br/>
      <input type="text" value="Yash" id="{{myId}}" /><br/>
      <input disabled type="text" value="Yash" id="{{myId}}" /><br/>
      <!--<input disabled="false" type="text" value="Yash" id="{{myId}}" /><br/> this syntex is not work because it's not binding for this reason you need to use property binding.-->
      <input [disabled]="true" type="text" value="Yash" id="{{myId}}" /><br/> <!--This will work because here We use property binding-->
      <input [disabled]="isDisabled" type="text" value="Yash" id="{{myId}}" />
`,
  styles: [`
h1{
  text-align:center;
}`]
})
export class PropertyBindingComponent implements OnInit {
  public myId = "testId";
  isDisabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
