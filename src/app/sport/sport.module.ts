import {NgModule} from '@angular/core';
import {SportComponent} from './sport.component';
import {SportRoutingModule} from './sport-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from '@angular/common';
import { LeagueComponent } from './league/league.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [SportComponent, LeagueComponent],
  imports: [
    CommonModule,
    SportRoutingModule,
    MatExpansionModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class SportModule {}
