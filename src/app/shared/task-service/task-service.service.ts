import { Injectable } from '@angular/core';
import { ITask } from 'src/app/models/task.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  items: ITask[] = [];
  public taskUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.taskUrl).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Errro: ${err.error.message}`;
    } else {
      errorMessage = `Errored code: ${err.status}, error is: ${err.message}`;
    }
    return throwError(() => errorMessage);
  }
}
