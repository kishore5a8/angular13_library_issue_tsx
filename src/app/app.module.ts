import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SampleLibModule } from "sampleLib";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
