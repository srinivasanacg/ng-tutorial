import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  pageTitle:string;
  myTextStr:string;


  settinggsSubArr:string[] = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",];
  
  constructor() { 
    this.pageTitle  = "settings"
  }

  ngOnInit() {
  }

  addActiveCls(event:any){
    console.log(event)
    let parEleme = event.srcElement.parentElement;
    let childArr = parEleme.children;
    
    for (let i = 0; i < childArr.length; i++) {
      console.log()
      let child = childArr[i];
      console.log(child.classList)
      child.classList.remove("active")
      
    }
    console.log("I am clicking")
    let elem = event.srcElement;
    elem.classList.add("active");
  }

}
