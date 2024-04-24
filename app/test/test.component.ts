import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-test]', selector as a attribute
  //selector: '.app-test', selectror as a class
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template: `<h2>This is
                multipal line inner html</h2>
<h1>Hello {{name}}</h1>
<h2>{{2+2}}</h2>
<h2>{{"Welcome " + name}}</h2>
<h2>{{name.length}}</h2>
<h2>{{name.toUpperCase()}}</h2>
<h2>{{user()}}</h2>
<h2>{{siteUrl}}</h2>`,
  /*styleUrls: ['./test.component.css']*/
  styles: [`
h2{
  color:red;
}
`]
})
export class TestComponent implements OnInit {
  public name = "Yash";
  public siteUrl = window.location.href;
  constructor() { }
  user() {
    return "Hello" + this.name;
  }
  ngOnInit(): void {
  }

}
