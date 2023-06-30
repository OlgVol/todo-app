import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],

})
export class NewTaskComponent {
title = "Create new task"
inSubmit = false

constructor( private dialog: MatDialog) {

}

taskName = new FormControl('', [Validators.required, Validators.minLength(3)])
timePicker = new FormControl(new Date, Validators.required);
taskList = new FormControl('Default', Validators.required)

taskForm = new FormGroup({
  taskName: this.taskName,
  timePicker: this.timePicker,
  taskList: this.taskList
})

onCreateList() {
const dialogConfig =new MatDialogConfig();
dialogConfig.disableClose = false;
dialogConfig.autoFocus = true;
this.dialog.open(NewTaskListComponent, dialogConfig)
}
onCloseDialog() {
  this.dialog.closeAll();
}
}
