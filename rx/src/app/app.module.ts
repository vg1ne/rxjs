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
import { ClickableButtonComponent } from './clickable-button/clickable-button.component';
import { RxIntervalComponent } from './rx-interval/rx-interval.component';
import { BufferComponent } from './buffer/buffer.component';
import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    CustomChipsComponent,
    ClickableButtonComponent,
    RxIntervalComponent,
    BufferComponent,
    BufferCountComponent,
    BufferTimeComponent,
    AutocompleteComponent,
    UserComponent
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
