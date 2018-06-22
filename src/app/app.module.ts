import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstCompoComponent } from './first-compo/first-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FirstCompoComponent]
})
export class AppModule { }
