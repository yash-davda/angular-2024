import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-test]', selector as a attribute
  //selector: '.app-test', selectror as a class
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template: `<h2>This is
                multipal line inner html</h2>`,
  /*styleUrls: ['./test.component.css']*/
  styles: [`
h2{
  color:red;
}
`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
