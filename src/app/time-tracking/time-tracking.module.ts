import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTrackingRoutingModule } from './time-tracking-routing.module';
import { TimeComponent } from './time/time.component';
import { ActivitiesComponent } from './time/activities/activities.component';


@NgModule({
  declarations: [
    TimeComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    TimeTrackingRoutingModule
  ]
})
export class TimeTrackingModule { }
