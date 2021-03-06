import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { error } from 'util';

import { MadlibService } from '../../services/madlibs/madlib.service';

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
  subsrciption: Subscription;

  constructor(fb: FormBuilder, private madlibService: MadlibService) {
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

    this.subsrciption = this.madlibService.receiveMadlib().subscribe(
      madlib => {
        this.setMadlib(madlib);
      });
  }

  ngOnInit() {
    this.getOldMadlibs();
  }

  reset(): void {
    this.greet.reset();
  }

  onSubmit(lib: FormGroup, user: FormGroup): void {
    const data = {
      lib: lib.value,
      user: user.value
    };

    data.user.madlib = 'greetings';

    this.submitMadlib.emit(data);
    this.reset();
    this.getOldMadlibs();
  }

  setMadlib(madlib: any): void {
    if (madlib.madlib === 'greetings') {
      this.greet.setValue(madlib.data);
    }
  }

  getOldMadlibs(): void {
    this.isLoading = true;
    const query = {
      madlib: 'greetings'
    };

    this.madlibService.getMadLib(query).subscribe(
      data => this.madlibs = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}
