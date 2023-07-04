import { Component } from '@angular/core';
import { ITask } from '../models/task.model';
import { TaskServiceService } from '../shared/task-service/task-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
tasks: ITask[] = [];
sub!: Subscription;

constructor(
  private taskService: TaskServiceService
) {

}

ngOnInit() {
  this.sub = this.taskService.getTasks().subscribe({
    next: (tasks) => {
      this.tasks = tasks;
    },
  });
}
}
