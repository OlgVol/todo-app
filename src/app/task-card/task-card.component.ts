import { Component } from '@angular/core';
import { ITask } from '../models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
tasks: ITask[] = [];
}
