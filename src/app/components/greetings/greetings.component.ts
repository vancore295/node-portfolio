import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {
  greet: FormGroup;
  submission: FormGroup;
  @Output() submitMadlib = new EventEmitter<any>();

  constructor(fb: FormBuilder) {
    this.greet = fb.group({
      noun_plural: '',
      occupation: '',
      animal_plural: '',
      place: '',
      verb: '',
      noun: ''
    });
    this.submission = fb.group({
      'creator': [null, Validators.required],
      'madlib': {value: 'greetings', disabled: true }
    });
  }

  ngOnInit() {
  }

  reset(): void {
    this.greet.reset();
  }

  onSubmit(lib: FormGroup): void {
    this.submitMadlib.emit(lib.value);
  }
}
