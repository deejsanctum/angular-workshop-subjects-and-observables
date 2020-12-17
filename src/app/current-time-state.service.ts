import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CurrentTimeStateService {

  private state = {
    currentTime: new Date()
  };

  currentTimeSubject: BehaviorSubject<Date> = new BehaviorSubject(this.state.currentTime);
  currentTime$: Observable<Date> = this.currentTimeSubject.asObservable()

  constructor() { }

  updateCurrentTime(time: Date): void {
    this.state.currentTime = time;
    this.currentTimeSubject.next(time);
  }
}