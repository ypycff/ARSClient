import {Component, NgModule, ViewChild, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class BlankPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }


}

export class Skill {
  name:string;
  level:string;
}


