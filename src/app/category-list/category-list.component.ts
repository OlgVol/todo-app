import { Component } from '@angular/core';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { TaskServiceService } from '../shared/task-service/task-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends TasksListComponent{

  constructor(service: TaskServiceService) {
    super(service)
  }

}
