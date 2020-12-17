import { Component, OnInit } from "@angular/core";
import { interval, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { CurrentTimeBusinessService } from "./current-time-business.service";
import { CurrentTimeStateService } from "./current-time-state.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentTime: Date = new Date();
  currentTime$: Observable<Date> = this.aaa.currentTime$;

  constructor(
    private aaa: CurrentTimeStateService,
    private bbb: CurrentTimeBusinessService
    ) {}
}
