import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface data {
  title: string;
  "timeframes": {
    "daily": {
      "current": number,
      "previous": number
    },
    "weekly": {
      "current": number,
      "previous": number
    },
    "monthly": {
      "current": number,
      "previous": number
    }
  }
}


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  datas: data[] | any
  @Input() time:string=''

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.time='day'
    this.httpclient.get('../../../assets/time-tracking-dashboard-main/data.json').subscribe(data => this.datas = data
    )
  }

}
