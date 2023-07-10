import { Component, ElementRef, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { TaskServiceService } from '../shared/task-service/task-service.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent extends TasksListComponent {
  viewTask = false;

  constructor(private dialog: MatDialog, public service: TaskServiceService) {
    super(service);
  }

  createTask() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(NewTaskComponent, dialogConfig);
  }

  viewAllTasks() {
    this.viewTask = !this.viewTask;
  }
}
