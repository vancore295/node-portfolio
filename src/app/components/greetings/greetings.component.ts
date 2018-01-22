import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { MadlibService } from '../../services/madlibs/madlib.service';
import { error } from 'util';


@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {
  greet: FormGroup;
  submission: FormGroup;
  @Output() submitMadlib = new EventEmitter<any>();
  madlibs: any[] = [];
  isLoading = true;

  constructor(fb: FormBuilder, private madlibService: MadlibService, private http: Http) {
    this.greet = fb.group({
      noun_plural: [''],
      occupation: [''],
      animal_plural: [''],
      place: [''],
      verb: [''],
      noun: ['']
    });
    this.submission = fb.group({
      'creator': '',
      'madlib': [{value: 'Greetings Earthlings', disabled: true}]
    });
  }

  ngOnInit() {
    const query = {
      madlib: 'greetings'
    };

    this.madlibService.getMadLib(query).subscribe(
      data => this.madlibs = data,
      error => console.log(error),
      () => this.isLoading = false
    );
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
