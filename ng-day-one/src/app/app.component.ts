import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-day-one';
  constructor(public router: Router){

  }

  showHeader(){
    console.log(this.router.url);
    if(this.router.url == '/about'){
      return true;
    }

  }
}
