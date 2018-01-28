import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { error } from 'util';

import { MadlibService } from '../../services/madlibs/madlib.service';
@Component({
  selector: 'app-proverbs',
  templateUrl: './proverbs.component.html',
  styleUrls: ['./proverbs.component.scss']
})
export class ProverbsComponent implements OnInit {
  proverbs: FormGroup;
  submission: FormGroup;
  @Output() submitMadlib = new EventEmitter<any>();
  madlibs: any[] = [];
  isLoading = true;
  subsrciption: Subscription;

  constructor(fb: FormBuilder, private madlibService: MadlibService) {
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

    this.subsrciption = this.madlibService.receiveMadlib().subscribe(
      madlib => {
        this.setMadlib(madlib);
      });
  }

  ngOnInit() {
    const query = {
      madlib: 'proverbs'
    };

    this.madlibService.getMadLib(query).subscribe(
      data => this.madlibs = data,
      error => console.log(error),
      () => this.isLoading = false
    );
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

  setMadlib(madlib: any): void {
    if (madlib.madlib === 'proverbs') {
      this.proverbs.setValue(madlib.data);
    }
  }

}
