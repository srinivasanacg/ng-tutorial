import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  formTitle:string;
  emailAddressVal:string;
  showForm:boolean = true;
  showList:boolean = false;
  listDisable:boolean = true;
  ageVal:number= 20;
  lists:string[] = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", ]
  
  students:any[] = [
    {
      "id":1,
      "name": "srini"
    },
    {
      "id":2,
      "name": "saravana"
    },
    {
      "id":3,
      "name": "bhavanya"
    },
    {
      "id":4,
      "name": "kosalaivani"
    },
  ]

  constructor() { 
    this.formTitle = "Login Form";
  }

  ngOnInit() {
  }


  toggleList(){
    this.showList = !this.showList
  }


  addActiveCls(event:any){
    // console.log(event)
    let parEleme = event.srcElement.parentElement;
    let childArr = parEleme.children;
    
    for (let i = 0; i < childArr.length; i++) {
      // console.log()
      let child = childArr[i];
      // console.log(child.classList)
      child.classList.remove("active")
      
    }
    // console.log("I am clicking")
    let elem = event.srcElement;
    elem.classList.add("active");
  }

}
