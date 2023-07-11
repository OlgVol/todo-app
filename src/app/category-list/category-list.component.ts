import { Component } from '@angular/core';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { TaskServiceService } from '../shared/task-service/task-service.service';
import { ITask } from '../models/task.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends TasksListComponent{
  task: ITask | undefined;
  

  constructor(service: TaskServiceService) {
    super(service)
  }
getTaskByCategory(category: string): void {
  this.taskService.getTasksByCategory(category).subscribe({
    next: (task) => (this.task = task),

  })
}
}
