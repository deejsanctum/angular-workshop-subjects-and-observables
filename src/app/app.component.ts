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
  currentTime$: Observable<
    string
  > = this.currentTimeStateService.currentDate$.pipe(
    map(newDate => this.getFormattedDate(newDate))
  );

  constructor(private currentTimeStateService: CurrentTimeStateService) {}

  ngOnInit(): void {
    interval(1000).subscribe(time =>
      this.currentTimeStateService.updateCurrentDate(new Date())
    );
  }

  private getFormattedDate(newDate: Date): string {
    const hours = `${newDate.getHours()}`.padStart(2, "0");
    const minutes = `${newDate.getMinutes()}`.padStart(2, "0");
    const seconds = `${newDate.getSeconds()}`.padStart(2, "0");
    const formattedDate = `${newDate.getDate()}-${newDate.getMonth() +
      1}-${newDate.getFullYear()}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return `${formattedDate.padStart(2, "0")} ${formattedTime.padStart(
      2,
      "0"
    )}`;
  }
}
