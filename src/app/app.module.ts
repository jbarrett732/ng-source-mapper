import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoFromMapComponent } from './components/demo-from-map/demo-from-map.component';
import { DemoFromUrlComponent } from './components/demo-from-url/demo-from-url.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFromMapComponent,
    DemoFromUrlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
