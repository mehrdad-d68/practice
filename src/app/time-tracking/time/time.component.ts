import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  time=''

  constructor() { }

  ngOnInit(): void {
    this.time='day'
    }

  timeselected(t:string){
    this.time=t

  }

}
