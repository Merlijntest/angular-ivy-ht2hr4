import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Component2Component } from './component2/component2.component';
import { DecoyComponent } from './decoy/decoy.component';
import { DierenprofielComponent } from './dierenprofiel/dierenprofiel.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, Component2Component, DecoyComponent],
  bootstrap: [AppComponent],
  providers: [DierenprofielComponent]
})
export class AppModule {}
