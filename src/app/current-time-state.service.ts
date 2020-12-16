import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CurrentTimeStateService {

  private subject = new BehaviorSubject<Date>(new Date());
  currentDate$ = this.subject.asObservable();

  constructor() { }

  updateCurrentDate(newDate: Date): void {
    this.subject.next(newDate);
  }

}