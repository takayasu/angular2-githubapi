import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import {Form, FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { KeywordComponent } from './keyword/keyword.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    KeywordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
