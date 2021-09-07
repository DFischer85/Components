import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  declarations: [
    ViewsHomeComponent,
    StatisticsComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ViewsModule { }
