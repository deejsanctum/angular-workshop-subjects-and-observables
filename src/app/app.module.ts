import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CurrentTimeStateService } from './current-time-state.service';
import { CurrentTimeBusinessService } from './current-time-business.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CurrentTimeStateService, CurrentTimeBusinessService]
})
export class AppModule { }
