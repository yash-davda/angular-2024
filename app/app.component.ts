import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLearning';
  public name = "Yash";
  public variable: number = 10;
  public message: string = '';
}
