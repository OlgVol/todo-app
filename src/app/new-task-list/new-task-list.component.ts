import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.css']
})
export class NewTaskListComponent {
title = "Create task list"

constructor(
  private dialog: MatDialog
) {

}

}
