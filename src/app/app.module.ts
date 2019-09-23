import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeadComponent } from './head/head.component';
import { PositionListComponent } from './position-list/position-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeadComponent,
    PositionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
