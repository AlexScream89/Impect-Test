import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from './sport.component';
import {LeagueComponent} from './league/league.component';

const routes: Routes = [
  { path: ':sport', component: SportComponent },
  { path: ':sport/:leagueId', component: LeagueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportRoutingModule {}
