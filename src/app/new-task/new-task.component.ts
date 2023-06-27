import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],

})
export class NewTaskComponent {
title = "Create new task"
inSubmit = false

taskName = new FormControl('', [Validators.required, Validators.minLength(3)])
timePicker = new FormControl(new Date, Validators.required);
taskList = new FormControl('', Validators.required)

taskForm = new FormGroup({
  taskName: this.taskName,
  timePicker: this.timePicker,
  taskList: this.taskList
})
}
