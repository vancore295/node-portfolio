import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.scss']
})
export class WarComponent implements OnInit {
  war: FormGroup;
  @Output() submitMadlib = new EventEmitter<any>();s

  constructor(fb: FormBuilder) {
    this.war = fb.group({
      'noun1': [''],
      'noun2': [''],
      'noun3': [''],
      'occupation': [''],
      'verb1': [''],
      'place': [''],
      'verbing1': [''],
      'noun4': [''],
      'verbing2': [''],
      'noun_plural': [''],
      'noun5': [''],
      'emotion': ['']
    });
  }

  ngOnInit() {
  }

  reset(): void {
    this.war.reset();
  }

  onSubmit(lib: FormGroup): void {
    this.submitMadlib.emit(lib.value);
  }

}
