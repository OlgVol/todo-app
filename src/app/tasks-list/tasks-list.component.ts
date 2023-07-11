import { Component, OnInit, Output } from '@angular/core';
import { ITask } from '../models/task.model';
import { Subscription } from 'rxjs';
import { TaskServiceService } from '../shared/task-service/task-service.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  tasks: ITask[] = [];
  sub!: Subscription;
  number: Number = 0;
  categoryNumber: Number = 0;


  constructor(public taskService: TaskServiceService) {}

  ngOnInit() {
    this.sub = this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.number = this.tasks.length
       // this.categoryNumber = this.tasks.getOwnPropertySymbol(category).length
      },

    });

  }
}
