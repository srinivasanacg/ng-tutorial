import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
  bird: string;
}


@Component({
  selector: 'app-choose-animal',
  templateUrl: './choose-animal.component.html',
  styleUrls: ['./choose-animal.component.less']
})
export class ChooseAnimalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ChooseAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit() {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
