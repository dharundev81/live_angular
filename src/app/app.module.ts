import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EmplistComponent } from './emplist/emplist.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EmplistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
