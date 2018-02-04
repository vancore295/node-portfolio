import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { error } from 'util';

import { MadlibService } from '../../services/madlibs/madlib.service';

@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.scss']
})
export class WarComponent implements OnInit {
  war: FormGroup;
  submission: FormGroup;
  @Output() submitMadlib = new EventEmitter<any>();
  madlibs: any[] = [];
  isLoading = true;
  subsrciption: Subscription;

  constructor(fb: FormBuilder, private madlibService: MadlibService) {
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
      'creator': [{value: ''}],
      'madlib': [{value: 'war', disabled: true}]
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
    this.war.reset();
    this.submission.reset();
  }

  onSubmit(lib: FormGroup, user: FormGroup): void {
    const data = {
      lib: lib.value,
      user: user.value
    };

    data.user.madlib = 'war';

    this.submitMadlib.emit(data);
    this.reset();
    this.getOldMadlibs();
  }

  setMadlib(madlib: any): void {
    if (madlib.madlib === 'war') {
      this.war.setValue(madlib.data);
    }
  }

  getOldMadlibs(): void {
    this.isLoading = true;
    const query = {
      madlib: 'war'
    };

    this.madlibService.getMadLib(query).subscribe(
      data => this.madlibs = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}
