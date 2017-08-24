import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-madlibs',
  templateUrl: './madlibs.component.html',
  styleUrls: ['./madlibs.component.css']
})


export class MadlibsComponent implements OnInit {
  greet: FormGroup;

  constructor(fb: FormBuilder) {
    this.greet = fb.group({
      'noun_plural': [''],
      'occupation': [''],
      'animal_plural': [''],
      'place': [''],
      'verb': [''],
      'noun': ['']
    });
  }

  ngOnInit() { }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
