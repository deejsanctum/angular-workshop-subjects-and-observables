import { Component, OnInit } from "@angular/core";
import { interval, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CurrentTimeStateService } from "./current-time-state.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  currentTime$: Observable<Date> = this.currentTimeStateService.currentDate$;

  constructor(private currentTimeStateService: CurrentTimeStateService) {}

  ngOnInit(): void {
    interval(1000).subscribe(time =>
      this.currentTimeStateService.updateCurrentDate(new Date())
    );
  }
}
