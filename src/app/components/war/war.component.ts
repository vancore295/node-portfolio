import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.scss']
})
export class WarComponent implements OnInit {
  war: FormGroup;
  submission: FormGroup;
  @Output() submitMadlib = new EventEmitter<any>();

  constructor(fb: FormBuilder) {
    this.war = fb.group({
      noun1: '',
      noun2: '',
      noun3: [''],
      occupation: [''],
      verb1: [''],
      place: [''],
      verbing1: [''],
      noun4: [''],
      verbing2: [''],
      noun_plural: [''],
      noun5: [''],
      emotion: ['']
    });
    this.submission = fb.group({
      'creator': [{value: '', disabled: false }, Validators.requiredTrue],
      'madlib': [{value: 'war', disabled: true}]
    });
  }

  ngOnInit() {
  }

  reset(): void {
    this.war.reset();
  }

  onSubmit(lib: FormGroup, user: FormGroup): void {
    const data = {
      lib: lib.value,
      user: user.value
    };

    this.submitMadlib.emit(data);
  }

}
