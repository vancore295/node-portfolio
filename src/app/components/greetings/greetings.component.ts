import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {
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

  ngOnInit() {
  }

  reset(): void {
    this.greet.reset();
  }
}
