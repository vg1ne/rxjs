import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';
import { CustomChipsComponent } from './custom-chips/custom-chips.component';
import {MdChipsModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    CustomChipsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdChipsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
