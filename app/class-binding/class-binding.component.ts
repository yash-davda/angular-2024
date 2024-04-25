import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
<h1>Har Har Mahadev</h1>
<h2 class="text-danger">Class binding</h2>
<h2 [class]="successClass">Class binding</h2>
<h2 class="text-special" [class]="successClass">Class binding</h2> <!-- If we use both class with class binding and without classBinding then first priority is givin by CLI is ClassBinding. -->
<h2 [class.text-danger]="hasError">Class binding</h2> <!-- If hasError is true then font color will be change, otherwise it will not change. -->
<h2 [ngClass]="messageClasses">Class binding</h2>
`,
  styles: [`
h1{
  color:blue;
  text-align: center;
}
.text-success{
color:green;
}
.text-danger{
color:red;
}
.text-special{
font-style:italic;
}
`]
})
export class ClassBindingComponent implements OnInit {
  public successClass = "text-success";
  hasError: boolean = true;
  isSpical: boolean = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpical
  }
  constructor() { }

  ngOnInit(): void {
  }

}
