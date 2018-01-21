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
      'creator': '',
      'madlib': 'greetings'
    });
  }

  ngOnInit() {
  }

  reset(): void {
    this.greet.reset();
  }

  onSubmit(lib: FormGroup, user: FormGroup): void {
    const data = {
      lib: lib.value,
      user: user.value
    };

    this.submitMadlib.emit(data);
  }
}
