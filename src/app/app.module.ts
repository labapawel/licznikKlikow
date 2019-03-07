import { ClickServiceService } from './click-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { ClickComponent } from './click/click.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    ClickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClickServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
