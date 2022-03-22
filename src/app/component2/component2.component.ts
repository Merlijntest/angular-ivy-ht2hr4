import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { DecoyComponent } from '../decoy/decoy.component';
import { DierenprofielComponent } from '../dierenprofiel/dierenprofiel.component';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  view(){
    AppComponent = DierenprofielComponent
  }

}

