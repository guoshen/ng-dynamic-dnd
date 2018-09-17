import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
=======
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { TextBoxComponent } from './utils/text-box/text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TextBoxComponent]
>>>>>>> 1abe92fdfb31753b860c9966f1067d2da71f284e
})
export class AppModule { }
