import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { 
    alert("You are in home page")
  }

  ngOnInit() {
    alert("Welcome to NG DAY ONE")
  }

  
}
