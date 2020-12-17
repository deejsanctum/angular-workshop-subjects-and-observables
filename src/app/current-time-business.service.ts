import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CurrentTimeStateService } from './current-time-state.service';

@Injectable()
export class CurrentTimeBusinessService {

  private sub: Subscription = new Subscription();
  constructor(private aaa: CurrentTimeStateService) {
    this.sub.add(
      interval(1000).subscribe((_) => this.aaa.updateCurrentTime(new Date()))
    );
   }

}