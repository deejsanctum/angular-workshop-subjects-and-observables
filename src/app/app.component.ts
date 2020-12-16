import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentTime: Date = new Date();
  currentTime$ = interval(1000);

  ngOnInit(): void {
    this.currentTime$.subscribe((time) => this.currentTime = new Date());
  }
}
