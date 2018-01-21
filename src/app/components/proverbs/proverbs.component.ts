import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proverbs',
  templateUrl: './proverbs.component.html',
  styleUrls: ['./proverbs.component.scss']
})
export class ProverbsComponent implements OnInit {
  proverbs: FormGroup;
  submission: FormGroup;
  @Output() submitMadlib = new EventEmitter<any>();

  constructor(fb: FormBuilder) {
    this.proverbs = fb.group({
      noun1: [''],
      number: [''],
      noun2: [''],
      adj1: [''],
      verbs1: [''],
      adj2: [''],
      noun3: [''],
      adj3: [''],
      noun4: [''],
      noun5: [''],
      verbs2: ['']
    });
    this.submission = fb.group({
      'creator': '',
      'madlib': [{value: 'Ancient Proverbs', disabled: true}]
    });
  }

  ngOnInit() {
  }

  reset(): void {
    this.proverbs.reset();
  }

  onSubmit(lib: FormGroup, user: FormGroup): void {
    const data = {
      lib: lib.value,
      user: user.value
    };

    this.submitMadlib.emit(data);
  }

}
