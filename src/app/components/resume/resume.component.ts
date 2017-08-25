import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  context: CanvasRenderingContext2D;
  @ViewChild('myCanvas') line;

  ngAfterViewInit(): void {
    const canvas = this.line.nativeElement;
    this.context = canvas.getContext('2d');

    this.context.beginPath();
    this.context.moveTo(0, canvas.height / 2); // starting point
    this.context.lineTo(canvas.width, canvas.height / 2); // end point
    this.context.lineWidth = 20;
    this.context.stroke();
  }
  constructor() { }

  ngOnInit() {
  }

}
