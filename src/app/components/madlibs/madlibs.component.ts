import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { Madlib } from '../../classes/madlib';

import { MadlibService } from '../../services/madlibs/madlib.service';


@Component({
  selector: 'app-madlibs',
  templateUrl: './madlibs.component.html',
  styleUrls: ['./madlibs.component.scss']
})


export class MadlibsComponent implements OnInit {

  madlibs: Madlib[] = [];
  isLoading = true;
  saving = false;

  constructor(private madlibService: MadlibService, private http: Http) { }

  ngOnInit() {
    this.getMadlibs();
  }

  getMadlibs() {
    this.madlibService.getMadLibs().subscribe(
      data => this.madlibs = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  saveMadlib(lib: any) {
    this.saving = true;
    const newMadLib = new Madlib();
    newMadLib.creator = lib.creator;
    newMadLib.madlib = lib.madlib;
    newMadLib.data = lib.data;

    this.madlibService.saveMadlib(newMadLib).subscribe(
      data => {
        console.log('success', data);
        this.saving = false;
      },
      error => {
        console.log('err', error);
        this.saving = false;
      },
      () => {
        this.saving = false;
      }
    );
  }


}
