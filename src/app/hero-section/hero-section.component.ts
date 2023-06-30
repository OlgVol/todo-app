import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';


@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {

  constructor(
    private dialog: MatDialog
  ){}

  createTask() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(NewTaskComponent, dialogConfig)
  }
}
