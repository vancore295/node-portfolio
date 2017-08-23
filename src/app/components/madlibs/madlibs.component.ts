import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-madlibs',
  templateUrl: './madlibs.component.html',
  styleUrls: ['./madlibs.component.css']
})


export class MadlibsComponent implements OnInit {

  greet: FormGroup;
  let  = new FormGroup({
    noun_plural: new FormControl()
  });

  constructor() { 
    
  }

  ngOnInit() { }

}
