import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { HomeComponent } from './home/home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LogListComponent } from './log/log-list/log-list.component';
import { G2CardComponent } from 'src/app/components/g2-card/g2-card.component';
import { TrendComponent } from 'src/app/components/trend/trend.component';
import { G2MiniAreaComponent } from 'src/app/components/g2-mini-area/g2-mini-area.component';
import { G2MiniBarComponent } from 'src/app/components/g2-mini-bar/g2-mini-bar.component';
import { G2MiniProgressComponent } from 'src/app/components/g2-mini-progress/g2-mini-progress.component';

const REF_COMMON_COMPONENTS = [
  G2CardComponent,
  TrendComponent,
  G2MiniAreaComponent,
  G2MiniBarComponent,
  G2MiniProgressComponent
];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SystemRoutingModule
  ],
  declarations: [
    ...REF_COMMON_COMPONENTS,
    UserListComponent, UserInfoComponent, HomeComponent, LogListComponent]
})
export class SystemModule { }
