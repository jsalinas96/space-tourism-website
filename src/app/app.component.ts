import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'space-tourism-website-main';


  state = false;

  burgerMenuClick(){
    this.state = !this.state;
    console.log('btn');
  }
}
