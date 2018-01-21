import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proverbs',
  templateUrl: './proverbs.component.html',
  styleUrls: ['./proverbs.component.scss']
})
export class ProverbsComponent implements OnInit {
  proverbs: FormGroup;
  @Output() submitMadlib = new EventEmitter<any>();

  constructor(fb: FormBuilder) {
    this.proverbs = fb.group({
      'noun1': [''],
      'number': [''],
      'noun2': [''],
      'adj1': [''],
      'verbs1': [''],
      'adj2': [''],
      'noun3': [''],
      'adj3': [''],
      'noun4': [''],
      'noun5': [''],
      'verbs2': ['']
    });
  }

  ngOnInit() {
  }

  reset(): void {
    this.proverbs.reset();
  }

  onSubmit(lib: FormGroup): void {
    this.submitMadlib.emit(lib.value);
  }

}
