import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.scss']
})
export class WarComponent implements OnInit {
  war: FormGroup;

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

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
