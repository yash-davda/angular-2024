import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
  <h1>Har Har Mahadev</h1>
  <h2 [style.color]="'pink'">Hello</h2>
  <h2 [style.color]="hasError?'pink':'red'">Hello</h2>
  <h2 [style.color]="textColor">Hello</h2>
  <h2 [ngStyle]="errorMessages">Hello</h2>
`,
  styles: [`
h1{
  text-align: center;
}
`]
})
export class StyleBindingComponent implements OnInit {
  public hasError = false;
  public isSpecial = true;
  public textColor = 'pink';
  public errorMessages = {
    color: "blue",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
